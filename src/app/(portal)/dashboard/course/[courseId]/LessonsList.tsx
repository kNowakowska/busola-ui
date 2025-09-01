import { Lesson } from "@/lib/types/courses";

import LessonListItem from "./LessonListItem";

export default function LessonsList({ lessons }: { lessons: Lesson[] }) {
  return (
    <div className="w-full flex flex-col gap-y-5 rounded-2xl p-0 md:p-2">
      {lessons.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-base md:text-xl text-center font-bold">
            Brak lekcji w tym kursie
          </p>
        </div>
      )}
      {lessons.map((lesson) => (
        <LessonListItem key={lesson.uuid} lesson={lesson} />
      ))}
    </div>
  );
}
