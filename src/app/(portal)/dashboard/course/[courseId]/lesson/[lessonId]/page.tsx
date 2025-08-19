"use client";
import { use, useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { ArrowLeftIcon } from "@/lib/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/lib/icons/ArrowRightIcon";
import VideoPlayer from "@/lib/components/VideoPlayer";
import { useQuery } from "@tanstack/react-query";
import { CourseDetails, LessonDetails } from "@/lib/types/courses";
import apiClient from "@/lib/api/apiClient";
import { lessonKeys } from "@/lib/api/queryKeysFactory";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function LessonPage({
  params,
}: {
  params: Promise<{ courseId: string; lessonId: string }>;
}) {
  const { courseId, lessonId } = use(params);

  const router = useRouter();

  const { data: lesson, isPending } = useQuery({
    queryKey: lessonKeys.details(lessonId as string),
    queryFn: () =>
      apiClient<LessonDetails>(
        `/dashboard/course/${courseId}/lesson/${lessonId}`
      ),
  });

  if (isPending) {
    return <div>Ładowanie...</div>;
  }

  if (!lesson) {
    // TODO: add error page
    return <div>Lekcja nie znaleziona</div>;
  }

  const components = documentToReactComponents(lesson.content as any, {
    renderNode: {
      paragraph: (node, children) => <p>{children}</p>,
    },
  });

  return (
    <div className="flex flex-col gap-y-10 pb-30">
      {/* <div className="flex flex-row justify-between ">
        {lesson.previousLessonId ? (
          <Link
            href={`/user/course/${lesson.courseId}/lesson/${lesson.previousLessonId}`}
          >
            <ArrowLeftIcon /> Poprzednia lekcja
          </Link>
        ) : (
          <div></div>
        )}
        {lesson.nextLessonId ? (
          <Link
            href={`/user/course/${lesson.courseId}/lesson/${lesson.nextLessonId}`}
          >
            Następna lekcja <ArrowRightIcon />
          </Link>
        ) : (
          <div></div>
        )}
      </div> */}

      <h2 className="text-4xl font-bold ">{lesson.name}</h2>
      {lesson.videoUrl ? <VideoPlayer url={lesson.videoUrl} /> : undefined}
      {components}
      <div className="flex flex-row justify-between items-center">
        <button
          className="secondary text-white p-3 rounded-lg w-[200px]"
          onClick={() => {
            router.push(`/user/course/${lesson.courseId}`);
          }}
        >
          Wróć do listy lekcji
        </button>
        <button
          className="secondary text-white p-3 rounded-lg w-[200px]"
          onClick={() => {
            // router.push(`/user/course/${courseId}/lesson/${lesson.nextLessonId}`);
          }}
        >
          Oznacz lekcję jako ukończoną i przejdź do następnej
        </button>
      </div>

      <div className="flex flex-col justify-between items-start">
        {/* TODO Add saving on blur */}
        <h4 className="text-2xl mb-3">Twoje notatki: </h4>
        <textarea
          className="w-full h-40 border-[var(--light-blue)] border-2 rounded-lg p-2 shadow-md leading-[1.5]"
          rows={20}
        />
      </div>
    </div>
  );
}
