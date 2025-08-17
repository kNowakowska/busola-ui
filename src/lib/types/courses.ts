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
  lessonsCompleted?: number;
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

export interface CourseDetailsResponse extends CourseDetails {
  description: string;
  videoUrl?: string;
  content: string;
  previousLessonId?: number;
  nextLessonId?: number;
}
