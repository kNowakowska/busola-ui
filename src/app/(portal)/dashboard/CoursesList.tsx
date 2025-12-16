import Link from "next/link";

import { Course } from "@/lib/types/courses";
import CourseListItem from "./CourseListItem";

export default function CoursesList({ courses }: { courses: Course[] }) {
  return (
    <div className="flex flex-col gap-y-5 rounded-2xl p-10 md:p-2">
      {courses.length === 0 && (
        <div className="flex h-full flex-col items-center justify-center">
          <p className="text-center text-base md:text-xl">
            Brak kursów do wyświetlenia. <br />
            Jeśli chcesz kupić jeden z naszych kursów{" "}
            <Link href="/" className="font-bold">
              {/* TODO: add link to shop */}
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
