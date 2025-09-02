import { useCallback, useEffect, useState } from "react";
import { isNil } from "lodash";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import apiClient from "@/lib/api/apiClient";
import { courseKeys, lessonKeys } from "@/lib/api/queryKeysFactory";
import { LessonDetails } from "@/lib/types/courses";

export function NotesSection({ lesson }: { lesson: LessonDetails }) {
  const queryClient = useQueryClient();
  const [notes, setNotes] = useState<string>();

  useEffect(() => {
    if (lesson) {
      setNotes(lesson.notes);
    }
  }, [lesson]);

  const { isPending: isSavingNotesPending, mutateAsync: saveNotes } =
    useMutation({
      mutationKey: lessonKeys.saveNotes(lesson.uuid as string),
      mutationFn: (notes: string) =>
        apiClient<LessonDetails>(
          `/dashboard/course/${lesson.courseId}/lesson/${lesson.uuid}/notes`,
          {
            notes,
          },
          {
            method: "POST",
          }
        ),
      onSuccess: (data) => {
        queryClient.invalidateQueries({
          queryKey: courseKeys.all,
          refetchType: "all",
        });

        queryClient.setQueryData(
          lessonKeys.details(lesson.uuid as string),
          (prevLesson: LessonDetails) => ({
            ...prevLesson,
            notes: data.notes,
          })
        );
      },
    });

  const onNotesChange = useCallback(
    async (notes: string) => {
      if ((isNil(notes) && isNil(lesson?.notes)) || notes === lesson?.notes)
        return;
      try {
        await toast.promise(
          () => saveNotes(notes),
          {
            loading: "Zapisywanie notatek...",
            success: "Notatki zostały zapisane",
            error: (error) => error.message,
          },
          {
            style: {
              minWidth: "250px",
            },
          }
        );
      } catch {}
    },
    [saveNotes]
  );

  return (
    <div className="flex flex-col justify-between items-start">
      <h4 className="text-xl md:text-2xl mb-3">Twoje notatki: </h4>
      <textarea
        className="w-full h-30 md:h-40 border-[var(--light-blue)] border-2 rounded-lg p-2 shadow-md leading-[1.5] text-sm md:text-base"
        rows={20}
        value={notes}
        onChange={(e) => {
          setNotes(e.target.value);
        }}
        onBlur={(e) => {
          onNotesChange(e.target.value);
        }}
        disabled={isSavingNotesPending}
        placeholder="Dodaj swoje notatki tutaj..."
      />
    </div>
  );
}
