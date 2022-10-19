export class Course {
  id: number;
  title: string;
  description: string;
  lessons: string;      // Should be an Lesson[] in the future
  categories: string;     // Should be an Category[] in the future
  keywords: string;
  state: string;
}
