"use client";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { ArrowLeftIcon } from "@/lib/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/lib/icons/ArrowRightIcon";
import VideoPlayer from "@/lib/components/VideoPlayer";

const lesson: Lesson = {
  id: 1,
  name: "Lekcja 1",
  description: "Lekcja 1",
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  isCompleted: true,
  content: "Lekcja 1",
  courseId: 1,
  nextLessonId: 2,
};

const WP_API =
  "https://public-api.wordpress.com/rest/v1.1/sites/kierunekmatura.com";

export const fetchPost = async () => {
  const rest = await fetch(`${WP_API}/posts/207`);
  return rest.json();
};

export default function LessonPage() {
  const router = useRouter();
  const [post, setPost] = useState<any>();

  useEffect(() => {
    fetchPost().then((post) => {
      setPost(post);
      console.log(post);
    });
  }, []);

  return (
    <div className="flex flex-col gap-y-10 pb-30">
      {/* <div className="w-4/5 flex flex-col p-10 gap-y-5"> */}
      <div className="flex flex-row justify-between ">
        {lesson.previousLessonId ? (
          <Link
            href={`/user/course/${lesson.courseId}/lesson/${lesson.previousLessonId}`}
          >
            <ArrowLeftIcon /> Poprzednia lekcja
          </Link>
        ) : (
          <div></div>
        )}
        {lesson.nextLessonId ? (
          <Link
            href={`/user/course/${lesson.courseId}/lesson/${lesson.nextLessonId}`}
          >
            Następna lekcja <ArrowRightIcon />
          </Link>
        ) : (
          <div></div>
        )}
      </div>

      <h2 className="text-4xl font-bold ">{post?.title || lesson.name}</h2>
      {lesson.videoUrl ? <VideoPlayer url={lesson.videoUrl} /> : undefined}
      {post ? (
        <>
          <div
            className="wp-content text-justify "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </>
      ) : undefined}
      <div className="flex flex-row justify-between items-center">
        <button
          className="secondary text-white p-3 rounded-lg w-[200px]"
          onClick={() => {
            router.push(`/user/course/${lesson.courseId}`);
          }}
        >
          Wróć do listy lekcji
        </button>
        <button
          className="secondary text-white p-3 rounded-lg w-[200px]"
          onClick={() => {
            router.push(`/user/course/1/lesson/${lesson.nextLessonId}`);
          }}
        >
          Oznacz lekcję jako ukończoną i przejdź do następnej
        </button>
      </div>

      <div className="flex flex-col justify-between items-start">
        {/* TODO Add saving on blur */}
        <h4 className="text-2xl mb-3">Twoje notatki: </h4>
        <textarea
          className="w-full h-40 border-[var(--light-blue)] border-2 rounded-lg p-2 shadow-md leading-[1.5]"
          rows={20}
        />
      </div>
    </div>
  );
}
