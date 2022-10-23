import { Student } from 'src/person/entities/student';
import {
  StateCourse,
  Created,
  Published,
  Deleted,
  Suspended,
} from './statecourse';
import { Lesson } from 'src/Lesson/Entities/Lesson';
export class Course {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
  categories: string; // Should be an Category[] in the future
  keywords: string;
  state: StateCourse;
  students: Student[];
}
