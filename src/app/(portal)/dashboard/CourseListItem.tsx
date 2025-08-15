import Image from "next/image";
import { useRouter } from "next/navigation";

import { ProgressBar } from "@/lib/components/ProgressBar";

export default function CourseListItem({ course }: { course: Course }) {
  const router = useRouter();

  return (
    <div
      key={course.id}
      onClick={() => {
        router.push(`/user/course/${course.id}`);
      }}
      className="min-h-[170px] flex flex-row gap-5 rounded-2xl  px-5 py-5 shadow-md cursor-pointer"
    >
      <Image
        src={course.image || "/busola-korepetycje-logo-puste-2.png"}
        alt={course.name}
        width={200}
        height={150}
        className="h-[150px] w-[200px]"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
        <p className="text-base">{course.shortDescription}</p>
        <ProgressBar
          label="Postęp"
          progress={
            course.lessons.length > 0
              ? (course.lessonsCompleted / course.lessons.length) * 100
              : 100
          }
        />
      </div>
    </div>
  );
}
