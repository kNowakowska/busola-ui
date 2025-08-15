interface Course {
  uuid: number;
  name: string;
  shortDescription: string;
  description: string;
  imageCMSId?: string;
  lessons: Lesson[];
  lessonsCompleted?: number;
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
