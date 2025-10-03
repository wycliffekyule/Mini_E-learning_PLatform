export interface Lesson {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  level: string;
  duration: string;
  enrolled: number;
  rating: number;
  image: string;
  lessons: Lesson[];
  completed: boolean;
  progress: number;
}
