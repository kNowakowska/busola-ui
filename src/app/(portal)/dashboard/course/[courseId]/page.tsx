"use client";
import { use } from "react";

import { isNil } from "lodash";
import { useQuery } from "@tanstack/react-query";

import contentfulClient from "@/lib/contentful/contentful";
import { ProgressBar } from "@/lib/components/ProgressBar";
import { courseKeys } from "@/lib/api/queryKeysFactory";
import apiClient from "@/lib/api/apiClient";
import { CourseDetails } from "@/lib/types/courses";

import LessonsList from "./LessonsList";

export default function CoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = use(params);

  const { data: course, isPending } = useQuery({
    queryKey: courseKeys.details(courseId as string),
    queryFn: () => apiClient<CourseDetails>(`/dashboard/course/${courseId}`),
  });

  const { data: imageUrl } = useQuery({
    queryKey: course?.imageCMSId ? courseKeys.image(course.imageCMSId) : [],
    queryFn: async () => {
      const asset = await contentfulClient.getAsset(course?.imageCMSId || "");
      return "https:" + asset.fields.file?.url;
    },
    enabled: !!course?.imageCMSId,
  });

  if (isPending) {
    return <div>Ładowanie...</div>;
  }

  if (!course) {
    // TODO: add error page
    return <div>Kurs nie znaleziony</div>;
  }

  return (
    <div className="flex flex-row">
      <div className="w-4/5 flex flex-col p-10 gap-y-15">
        <div
          className="w-full h-[300px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              imageUrl || "/pexels-karolina-grabowska-6958563.jpg"
            })`,
          }}
        ></div>
        <h2 className="text-4xl font-bold">{course.name}</h2>
        <p className="text-base text-justify">{course.description}</p>
        <LessonsList lessons={course.lessons} />
      </div>
      <div className="w-1/5 flex flex-col p-10 gap-y-5">
        <p>
          Zacząłeś pracę nad tym kursem: <b>7 lipca 2025</b>
        </p>
        <ProgressBar
          label="Postęp"
          progress={
            course.lessonsCount > 0
              ? Math.round(
                  (course.lessonsCompleted / course.lessonsCount) * 100
                )
              : 100
          }
        />
      </div>
    </div>
  );
}
