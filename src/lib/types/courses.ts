export interface User {
  uuid: string;
  email: string;
  name: string;
  lastName: string;
  courses: Course[];
}

export interface Course {
  uuid: string;
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
  courseId: string;
}

export interface LessonDetails extends Lesson {
  description: string;
  videoUrl?: string;
  content: object;
  order: number;
  previousLessonId?: string;
  nextLessonId?: string;
  notes?: string;
  quizId?: string;
}

export interface Answer {
  uuid: string;
  text: string;
}

export interface Question {
  uuid: string;
  text: string;
  options: Answer[];
}

export interface Quiz {
  uuid: string;
  name: string;
  questions: Question[];
}
