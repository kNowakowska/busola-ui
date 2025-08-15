import CourseListItem from "./CourseListItem";
import Link from "next/link";

export default function CoursesList({ courses }: { courses: Course[] }) {
  return (
    <div className="flex flex-col gap-y-5 rounded-2xl p-2">
      {courses.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-xl text-center">
            Brak kursów do wyświetlenia. <br />
            Jeśli chcesz kupić jeden z naszych kursów{" "}
            <Link href="/" className="font-bold">
              przejdź do sklepu
            </Link>
          </p>
        </div>
      )}
      {courses.map((course) => (
        <CourseListItem key={course.uuid} course={course} />
      ))}
    </div>
  );
}
