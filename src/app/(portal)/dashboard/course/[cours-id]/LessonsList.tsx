import LessonListItem from "./LessonListItem";

export default function LessonsList({ lessons }: { lessons: Lesson[] }) {
  return (
    <div className="flex flex-col gap-y-5 rounded-2xl p-2">
      {lessons.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-xl text-center">Brak lekcji w tym kursie</p>
        </div>
      )}
      {lessons.map((lesson) => (
        <LessonListItem key={lesson.id} lesson={lesson} />
      ))}
    </div>
  );
}
