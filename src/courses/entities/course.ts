import { student } from 'src/person/entities/student';
import { statecourse } from './statecourse';
import { Lesson } from 'src/Lesson/Entities/Lesson';
export class Course {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[] = [];
  categories: string; // Should be an Category[] in the future
  keywords: string;
  state: statecourse;
  students: student[];
}
