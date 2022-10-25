import { Student } from 'src/person/entities/student';
import {
  StateCourse,
  Created,
  Published,
  Deleted,
  Suspended,
} from './statecourse';
import { Lesson } from 'src/Lesson/Entities/Lesson';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(() => Lesson, (lesson) => lesson.course)
  lessons: Lesson[];

  @Column()
  categories: string; // Should be an Category[] in the future

  @Column()
  keywords: string;

  state: StateCourse;

  students: Student[];

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;
}
