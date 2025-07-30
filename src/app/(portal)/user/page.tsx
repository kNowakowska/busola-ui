"use client";

import { useEffect } from "react";
import CoursesList from "./CoursesList";

export const courses: Course[] = [
  {
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
        isCompleted: false,
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
    ],
    lessonsCompleted: 1,
  },
  {
    id: 2,
    name: "Kurs 2",
    shortDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    longDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/pexels-karolina-grabowska-6958563.jpg",
    lessons: [],
    lessonsCompleted: 0,
  },
];
export default function Dashboard() {
  const fetchCourses = async () => {
    // TODO Example of fetching data from contentful
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lessons`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return <CoursesList courses={courses} />;
}
