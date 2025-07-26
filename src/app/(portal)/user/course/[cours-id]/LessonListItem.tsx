"use client";

import Checkbox from "@/lib/components/Checkbox";
import { useRouter } from "next/navigation";

export default function LessonListItem({ lesson }: { lesson: Lesson }) {
  const router = useRouter();

  return (
    <div
      key={lesson.id}
      className="h-auto flex flex-row gap-5 rounded-2xl px-3 py-5 shadow-md"
    >
      <Checkbox defaultChecked={lesson.isCompleted} />
      <div
        className="grow cursor-pointer"
        onClick={() => {
          router.push(`/user/course/${lesson.courseId}/lesson/${lesson.id}`);
        }}
      >
        <h2 className="text-xl font-bold ">{lesson.name}</h2>
      </div>
    </div>
  );
}
