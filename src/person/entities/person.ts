import { Course } from 'src/courses/entities/course';

export abstract class Person {
  id: number;
  courses?: Course[];
  name: string;
  surname: string;
  isActive: boolean;
  cellNumber = '+584265821398';
}
