"use client";
import { use, useCallback, useEffect, useMemo, useState } from "react";
import { isNil } from "lodash";

import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { ArrowLeftIcon } from "@/lib/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/lib/icons/ArrowRightIcon";
import VideoPlayer from "@/lib/components/VideoPlayer";
import { LessonDetails } from "@/lib/types/courses";
import apiClient from "@/lib/api/apiClient";
import { courseKeys, lessonKeys } from "@/lib/api/queryKeysFactory";
import LoadingSpinner from "@/lib/components/LoadingSpinner";
import { Routes } from "@/lib/routes/routes";

export default function LessonPage({
  params,
}: {
  params: Promise<{ courseId: string; lessonId: string }>;
}) {
  const queryClient = useQueryClient();
  const [notes, setNotes] = useState<string>();

  const { courseId, lessonId } = use(params);
  const router = useRouter();

  const {
    data: lesson,
    isPending: isFetchingLesson,
    error,
  } = useQuery({
    queryKey: lessonKeys.details(lessonId as string),
    queryFn: async () =>
      apiClient<LessonDetails>(
        `/dashboard/course/${courseId}/lesson/${lessonId}`
      ),
  });

  useEffect(() => {
    if (lesson) {
      setNotes(lesson.notes);
    }
  }, [lesson]);

  const {
    isPending: isMarkingAsCompletedPending,
    mutateAsync: markAsCompleted,
  } = useMutation({
    mutationKey: lessonKeys.markAsCompleted(lessonId as string),
    mutationFn: () =>
      apiClient<LessonDetails>(
        `/dashboard/course/${courseId}/lesson/${lessonId}/complete`,
        undefined,
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
        lessonKeys.details(lessonId as string),
        (prevLesson: LessonDetails) => ({
          ...prevLesson,
          isCompleted: data.isCompleted,
        })
      );
    },
  });

  const { isPending: isSavingNotesPending, mutateAsync: saveNotes } =
    useMutation({
      mutationKey: lessonKeys.saveNotes(lessonId as string),
      mutationFn: (notes: string) =>
        apiClient<LessonDetails>(
          `/dashboard/course/${courseId}/lesson/${lessonId}/notes`,
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
          lessonKeys.details(lessonId as string),
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

  const onMarkAsCompleted = useCallback(async () => {
    try {
      await toast.promise(
        () => markAsCompleted(),
        {
          loading: "Zapisywanie postępu...",
          success: "Postęp został zapisany",
          error: (error) => error.message,
        },
        {
          style: {
            minWidth: "250px",
          },
        }
      );
    } catch {}
  }, [markAsCompleted]);

  const isLoading = useMemo(
    () => isSavingNotesPending || isMarkingAsCompletedPending,
    [isSavingNotesPending, isMarkingAsCompletedPending]
  );

  if (isFetchingLesson) {
    return <LoadingSpinner message="Wczytywanie lekcji" />;
  }

  if (error) {
    toast.error(error.message);
  }

  if (!lesson) {
    // TODO: add error page
    return <div>Lekcja nie znaleziona</div>;
  }

  const components = documentToReactComponents(lesson.content as any, {
    renderNode: {
      paragraph: (_node, children) => <p>{children}</p>,
    },
  });

  return (
    <div className="flex flex-col gap-y-10 pb-30">
      <div className="flex flex-row justify-between ">
        {lesson.previousLessonId ? (
          <Link
            href={`/dashboard/course/${lesson.courseId}/lesson/${lesson.previousLessonId}`}
          >
            <ArrowLeftIcon /> Poprzednia lekcja
          </Link>
        ) : (
          <div></div>
        )}
        {lesson.nextLessonId ? (
          <Link
            href={`/dashboard/course/${lesson.courseId}/lesson/${lesson.nextLessonId}`}
          >
            Następna lekcja <ArrowRightIcon />
          </Link>
        ) : (
          <div></div>
        )}
      </div>

      <h2 className="text-4xl font-bold ">{lesson.name}</h2>
      {lesson.videoUrl ? <VideoPlayer url={lesson.videoUrl} /> : undefined}
      {components}
      <div className="flex flex-row justify-between items-center">
        <button
          className="secondary text-white p-3 rounded-lg w-[200px]"
          onClick={() => {
            router.push(Routes.course(lesson.courseId));
          }}
          disabled={isLoading}
        >
          Wróć do listy lekcji
        </button>
        <button
          className="secondary text-white p-3 rounded-lg w-[200px]"
          onClick={async () => {
            await onMarkAsCompleted();
            if (lesson.nextLessonId)
              router.push(Routes.lesson(courseId, lesson.nextLessonId));
          }}
          disabled={isLoading}
        >
          Oznacz lekcję jako ukończoną{" "}
          {lesson.nextLessonId ? "i przejdź do następnej" : ""}
        </button>
      </div>

      <div className="flex flex-col justify-between items-start">
        <h4 className="text-2xl mb-3">Twoje notatki: </h4>
        <textarea
          className="w-full h-40 border-[var(--light-blue)] border-2 rounded-lg p-2 shadow-md leading-[1.5]"
          rows={20}
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
          onBlur={(e) => {
            onNotesChange(e.target.value);
          }}
          disabled={isLoading}
          placeholder="Dodaj swoje notatki tutaj..."
        />
      </div>
    </div>
  );
}
