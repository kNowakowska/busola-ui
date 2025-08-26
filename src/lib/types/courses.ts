export interface User {
  uuid: string;
  email: string;
  name: string;
  lastName: string;
  courses: Course[];
}

export interface Course {
  uuid: number;
  name: string;
  shortDescription: string;
  imageCMSId?: string;
  lessonsCompleted: number;
  lessonsCount: number;
}

export interface CourseDetails extends Course {
  description: string;
  lessons: Lesson[];
}

export interface Lesson {
  uuid: string;
  name: string;
  isCompleted: boolean;
  courseId: number;
}

export interface LessonDetails extends Lesson {
  description: string;
  videoUrl?: string;
  content: object;
  order: number;
  previousLessonId?: string;
  nextLessonId?: string;
  notes?: string;
}
