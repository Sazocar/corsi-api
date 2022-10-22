import { Course } from 'src/courses/entities/course';

export abstract class person {
  id: number;
  courses?: Course[];
  name: string;
  surname: string;
  IsActive: boolean;
}
