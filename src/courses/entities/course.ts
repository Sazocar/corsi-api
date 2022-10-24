import { Student } from 'src/person/entities/student';
import { StateCourse } from './statecourse';
import { Lesson } from 'src/Lesson/Entities/Lesson';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  lessons: Lesson[] = [];

  @Column()
  categories: string; // Should be an Category[] in the future

  @Column()
  keywords: string;

  state: StateCourse;

  students: Student[];
}
