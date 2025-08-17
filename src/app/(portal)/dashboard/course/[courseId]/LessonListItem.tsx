"use client";
import { useRouter } from "next/navigation";

import Checkbox from "@/lib/components/Checkbox";
import { Lesson } from "@/lib/types/courses";
import { ArrowRightIcon } from "@/lib/icons/ArrowRightIcon";

export default function LessonListItem({ lesson }: { lesson: Lesson }) {
  const router = useRouter();

  return (
    <div
      className="group h-auto flex flex-row items-center gap-5 rounded-2xl px-3 py-5 shadow-md transition-all duration-200 hover:bg-slate-50 hover:shadow-lg"
      onClick={() => {
        router.push(
          `/dashboard/course/${lesson.courseId}/lesson/${lesson.uuid}`
        );
      }}
    >
      <Checkbox defaultChecked={lesson.isCompleted} readOnly />
      <div className="grow cursor-pointer">
        <h2 className="text-xl font-bold ">{lesson.name}</h2>
      </div>
      <div className="flex items-center opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
        <ArrowRightIcon />
      </div>
    </div>
  );
}
