import { useCallback, useEffect, useState } from "react";
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
    async (e: React.FocusEvent<HTMLTextAreaElement>) => {
      const notes = e.target.value;
      if (notes === lesson?.notes) return;
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
      } catch {
        console.error("Error saving notes");
      }
    },
    [saveNotes, lesson]
  );

  return (
    <div className="flex flex-col items-start justify-between">
      <h4 className="mb-3 text-xl md:text-2xl">Twoje notatki: </h4>
      <textarea
        className="h-30 w-full rounded-lg border-2 border-[var(--light-blue)] p-2 text-sm leading-[1.5] shadow-md md:h-40 md:text-base"
        rows={20}
        value={notes}
        onChange={(e) => {
          setNotes(e.target.value);
        }}
        onBlur={onNotesChange}
        disabled={isSavingNotesPending}
        placeholder="Dodaj swoje notatki tutaj..."
      />
    </div>
  );
}
