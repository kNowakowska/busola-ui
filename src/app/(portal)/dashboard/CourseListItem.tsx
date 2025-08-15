import isNil from "lodash/isNil";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { ProgressBar } from "@/lib/components/ProgressBar";
import contentfulClient from "@/lib/contentful/contentful";
import { useQuery } from "@tanstack/react-query";

export default function CourseListItem({ course }: { course: Course }) {
  const router = useRouter();

  const { data: imageUrl } = useQuery({
    queryKey: ["course-image", course.imageCMSId],
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
        router.push(`/user/course/${course.uuid}`);
      }}
      className="min-h-[170px] flex flex-row gap-5 rounded-2xl  px-5 py-5 shadow-md cursor-pointer"
    >
      <Image
        src={imageUrl || "/busola-korepetycje-logo-puste-2.png"}
        alt={course.name}
        width={200}
        height={150}
        className="h-[150px] w-[200px]"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
        <p className="text-base">{course.shortDescription}</p>
        {!isNil(course.lessonsCompleted) ? (
          <ProgressBar
            label="Postęp"
            progress={
              course.lessons.length > 0
                ? (course.lessonsCompleted / course.lessons.length) * 100
                : 100
            }
          />
        ) : undefined}
      </div>
    </div>
  );
}
