import { useCallback } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import apiClient from "@/lib/api/apiClient";
import { courseKeys, lessonKeys } from "@/lib/api/queryKeysFactory";
import { Routes } from "@/lib/routes/routes";
import { LessonDetails } from "@/lib/types/courses";
import { Button } from "@/lib/components/Button";

export function MarkAsCompletedButton({ lesson }: { lesson: LessonDetails }) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    isPending: isMarkingAsCompletedPending,
    mutateAsync: markAsCompleted,
  } = useMutation({
    mutationKey: lessonKeys.markAsCompleted(lesson.uuid as string),
    mutationFn: () =>
      apiClient<LessonDetails>(
        `/dashboard/course/${lesson.courseId}/lesson/${lesson.uuid}/complete`,
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
        lessonKeys.details(lesson.uuid as string),
        (prevLesson: LessonDetails) => ({
          ...prevLesson,
          isCompleted: data.isCompleted,
        })
      );
    },
  });

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
    } catch {
      console.error("Error marking lesson as completed");
    }
  }, [markAsCompleted]);

  return (
    <Button
      onClick={async () => {
        await onMarkAsCompleted();
        if (lesson.nextLessonId)
          router.push(Routes.lesson(lesson.courseId, lesson.nextLessonId));
      }}
      disabled={isMarkingAsCompletedPending}
    >
      Oznacz lekcję jako ukończoną{" "}
      {lesson.nextLessonId ? "i przejdź do następnej" : ""}
    </Button>
  );
}
