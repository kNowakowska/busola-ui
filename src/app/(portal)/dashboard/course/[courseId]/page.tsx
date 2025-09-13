"use client";
import { use } from "react";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import contentfulClient from "@/lib/contentful/contentful";
import { ProgressBar } from "@/lib/components/ProgressBar";
import { courseKeys } from "@/lib/api/queryKeysFactory";
import apiClient from "@/lib/api/apiClient";
import { CourseDetails } from "@/lib/types/courses";
import LoadingSpinner from "@/lib/components/LoadingSpinner";
import { Routes } from "@/lib/routes/routes";
import { Button } from "@/lib/components/Button";

import LessonsList from "./LessonsList";

export default function CoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const router = useRouter();
  const { courseId } = use(params);

  const {
    data: course,
    isPending,
    error,
  } = useQuery({
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
    return <LoadingSpinner message="Wczytywanie kursu" />;
  }

  if (error) {
    toast.error(error.message);
  }

  if (!course) {
    // TODO: add error page
    return <div>Kurs nie znaleziony</div>;
  }

  return (
    <div className="md:pb-auto flex flex-col pb-10 md:flex-row">
      <div className="order-2 flex w-full flex-col items-center gap-y-10 p-10 md:order-1 md:w-4/5 md:items-start md:gap-y-15">
        <div
          className="h-[300px] w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              imageUrl || "/pexels-karolina-grabowska-6958563.jpg"
            })`,
          }}
        ></div>
        <h2 className="text-center text-2xl font-bold md:text-left md:text-4xl">
          {course.name}
        </h2>
        <p className="text-justify text-sm md:text-base">
          {course.description}
        </p>
        <LessonsList lessons={course.lessons} />
        <Button
          onClick={() => {
            router.push(Routes.dashboard());
          }}
        >
          Wróć do listy kursów
        </Button>
      </div>
      <div className="order-1 flex w-full flex-col gap-y-0 px-10 py-0 md:order-2 md:w-1/5 md:gap-y-5 md:p-10">
        <p className="text-center text-sm md:text-left md:text-base">
          Kupiłeś ten kurs: <br />
          <b>
            {new Date(course.startedAt).toLocaleDateString("pl-PL", {
              dateStyle: "long",
            })}
          </b>
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
