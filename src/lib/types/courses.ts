interface Course {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  image?: string;
  lessons: Lesson[];
  lessonsCompleted: number;
}

interface Lesson {
  id: number;
  name: string;
  description: string;
  videoUrl?: string;
  isCompleted: boolean;
  content: string;
  courseId: number;
  previousLessonId?: number;
  nextLessonId?: number;
}
