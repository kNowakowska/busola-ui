"use client";
import { useRouter } from "next/navigation";

import Checkbox from "@/lib/components/Checkbox";
import { Lesson } from "@/lib/types/courses";
import { ArrowRightIcon } from "@/lib/icons/ArrowRightIcon";
import { Routes } from "@/lib/routes/routes";

export default function LessonListItem({ lesson }: { lesson: Lesson }) {
  const router = useRouter();

  return (
    <div
      className="group hoverScaleSmall flex h-auto w-full flex-row items-center gap-3 rounded-2xl px-3 py-3 shadow-md md:gap-5 md:py-5"
      onClick={() => {
        router.push(Routes.lesson(lesson.courseId, lesson.uuid), {
          scroll: true,
        });
      }}
    >
      <Checkbox defaultChecked={lesson.isCompleted} readOnly />
      <div className="grow cursor-pointer">
        <h2 className="text-base font-bold md:text-xl">{lesson.name}</h2>
      </div>
      <div className="flex -translate-x-2 items-center opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
        <ArrowRightIcon />
      </div>
    </div>
  );
}
