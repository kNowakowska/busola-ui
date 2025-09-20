"use client";
import { use, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useMediaQuery } from "react-responsive";

import { ContentfulRichTextContent } from "@/lib/components/contentful/ContentfulRichTextContent";
import contentfulClient from "@/lib/contentful/contentful";
import { ArrowLeftIcon } from "@/lib/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/lib/icons/ArrowRightIcon";
import VideoPlayer from "@/lib/components/VideoPlayer";
import { LessonDetails } from "@/lib/types/courses";
import apiClient from "@/lib/api/apiClient";
import { lessonKeys } from "@/lib/api/queryKeysFactory";
import LoadingSpinner from "@/lib/components/LoadingSpinner";
import { Routes } from "@/lib/routes/routes";
import { DownloadIcon } from "@/lib/icons/DownloadIcon";
import { Button } from "@/lib/components/Button";

import { NotesSection } from "./NotesSection";
import { MarkAsCompletedButton } from "./MarkAsCompletedButton";
import { QuizSection } from "./QuizSection";

export default function LessonPage({
  params,
}: {
  params: Promise<{ courseId: string; lessonId: string }>;
}) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const { courseId, lessonId } = use(params);
  const router = useRouter();
  const [shouldDownloadTasks, setShouldDownloadTasks] = useState(false);

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

  const { data: fileUrl, isFetching: isFetchingFile } = useQuery({
    queryKey: lesson?.tasksFileCMSId
      ? lessonKeys.tasksFile(lessonId, lesson.tasksFileCMSId)
      : [],
    queryFn: async () => {
      if (!lesson?.tasksFileCMSId) {
        return "";
      }
      const asset = await contentfulClient.getAsset(lesson.tasksFileCMSId);
      return asset.fields.file?.url ? "https:" + asset.fields.file?.url : "";
    },
    enabled: shouldDownloadTasks,
  });

  const handleDownloadTasks = useCallback(() => {
    if (fileUrl) {
      window.open(fileUrl, "_blank");
      return;
    }
    setShouldDownloadTasks(true);
  }, [fileUrl]);

  useEffect(() => {
    if (fileUrl && shouldDownloadTasks) {
      setShouldDownloadTasks(false);
      window.open(fileUrl, "_blank");
    }
  }, [fileUrl, shouldDownloadTasks]);

  if (isFetchingLesson) {
    return <LoadingSpinner message="Wczytywanie lekcji" />;
  }

  if (!lesson || error) {
    // TODO: add error page
    return <div>Lekcja nie znaleziona</div>;
  }

  return (
    <div className="md:p-auto flex flex-col gap-y-7 px-10 pb-30">
      <div className="flex flex-row justify-between">
        {lesson.previousLessonId ? (
          <Link
            className="hoverScaleSmall text-sm md:text-base"
            href={`/dashboard/course/${lesson.courseId}/lesson/${lesson.previousLessonId}`}
          >
            <ArrowLeftIcon small={isMobile} /> Poprzednia lekcja
          </Link>
        ) : (
          <div></div>
        )}
        {lesson.nextLessonId ? (
          <Link
            className="hoverScaleSmall text-sm md:text-base"
            href={`/dashboard/course/${lesson.courseId}/lesson/${lesson.nextLessonId}`}
          >
            Następna lekcja <ArrowRightIcon small={isMobile} />
          </Link>
        ) : (
          <div></div>
        )}
      </div>
      <div className="flex flex-col gap-x-3 md:flex-row">
        <div className="flex w-full flex-col gap-y-7 md:w-4/5 md:gap-y-10">
          <h2 className="text-center text-2xl font-bold md:text-left md:text-4xl">
            {lesson.name}
          </h2>
          {lesson.videoUrl ? <VideoPlayer url={lesson.videoUrl} /> : undefined}
          <ContentfulRichTextContent content={lesson?.content} />

          <QuizSection lesson={lesson} />

          {lesson.tasksVideoUrl ? (
            <>
              <h3 className="text-2xl font-bold">Komentarz do zadań</h3>
              <VideoPlayer url={lesson.tasksVideoUrl} />
            </>
          ) : undefined}

          <NotesSection lesson={lesson} />
        </div>
        <div className="flex w-full flex-col gap-y-7 pt-10 md:w-1/5 md:gap-y-10 md:pt-0">
          <div className="flex flex-col items-center justify-between gap-y-7 p-5">
            <Button
              onClick={() => {
                router.push(Routes.course(lesson.courseId));
              }}
            >
              Wróć do listy lekcji
            </Button>
            <MarkAsCompletedButton lesson={lesson} />
            {lesson.tasksFileCMSId ? (
              <>
                <p className="text-sm md:text-base">
                  Do tego kursu przygotowano dodatkowe zadania, możesz pobrać je
                  poniżej:
                </p>
                <Button disabled={isFetchingFile} onClick={handleDownloadTasks}>
                  Pobierz zadania <DownloadIcon />
                </Button>
                <p className="text-sm md:text-base">
                  Dodatkowe informacje na temat zadań znajdziesz w filmie na
                  końcu lekcji
                </p>
              </>
            ) : undefined}
          </div>
        </div>
      </div>
    </div>
  );
}
