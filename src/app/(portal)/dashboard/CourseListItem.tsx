import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { ProgressBar } from "@/lib/components/ProgressBar";
import contentfulClient from "@/lib/contentful/contentful";
import { courseKeys } from "@/lib/api/queryKeysFactory";
import { Course } from "@/lib/types/courses";
import { Routes } from "@/lib/routes/routes";

export default function CourseListItem({ course }: { course: Course }) {
  const router = useRouter();

  const { data: imageUrl } = useQuery({
    queryKey: courseKeys.image(course.imageCMSId!),
    queryFn: async () => {
      const asset = await contentfulClient.getAsset(course.imageCMSId || "");
      return "https:" + asset.fields.file?.url;
    },
    enabled: !!course.imageCMSId,
  });

  return (
    <div
      key={course.uuid}
      onClick={() => {
        router.push(Routes.course(course.uuid), { scroll: true });
      }}
      className="hoverScaleSmall flex min-h-[170px] cursor-pointer flex-col items-center gap-5 rounded-2xl px-5 py-5 shadow-md md:flex-row"
    >
      <Image
        src={imageUrl || "/busola-korepetycje-logo-puste-2.png"}
        alt={course.name}
        width={200}
        height={150}
        className="rounded-lg object-cover"
      />
      <div className="flex flex-col gap-2">
        <h2 className="mb-2 text-center text-base font-bold md:text-left md:text-2xl">
          {course.name}
        </h2>
        <p className="text-justify text-sm md:text-base">
          {course.shortDescription}
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
