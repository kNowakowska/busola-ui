import { ProgressBar } from "@/lib/components/ProgressBar";
import LessonsList from "./LessonsList";

const course: Course = {
  id: 1,
  name: "Kurs 1",
  shortDescription:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  longDescription:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  image: "/pexels-karolina-grabowska-6958563.jpg",
  lessons: [
    {
      id: 1,
      name: "Lekcja 1",
      description: "Lekcja 1",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: true,
      content: "Lekcja 1",
      courseId: 1,
    },
    {
      id: 2,
      name: "Lekcja 2",
      description: "Lekcja 2",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
      content: "Lekcja 2",
      courseId: 1,
    },
    {
      id: 3,
      name: "Lekcja 3",
      description: "Lekcja 3",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
      content: "Lekcja 3",
      courseId: 1,
    },
    {
      id: 4,
      name: "Lekcja 4",
      description: "Lekcja 4",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
      content: "Lekcja 4",
      courseId: 1,
    },
    {
      id: 5,
      name: "Lekcja 5",
      description: "Lekcja 5",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
      content: "Lekcja 5",
      courseId: 1,
    },
  ],
  lessonsCompleted: 1,
};

export default function CoursePage() {
  return (
    <div className="flex flex-row">
      <div className="w-4/5 flex flex-col p-10 gap-y-5">
        <div
          className="w-full h-[300px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              course.image || "/pexels-karolina-grabowska-6958563.jpg"
            })`,
          }}
        ></div>
        <h2 className="text-4xl font-bold">{course.name}</h2>
        <p className="text-base text-justify">{course.longDescription}</p>
        <LessonsList lessons={course.lessons} />
      </div>
      <div className="w-1/5 flex flex-col p-10 gap-y-5">
        <p>
          Zacząłeś pracę nad tym kursem: <b>7 lipca 2025</b>
        </p>
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
