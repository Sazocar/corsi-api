import { Course } from 'src/courses/entities/course';
import { Lesson } from 'src/Lesson/Entities/Lesson';
import { Student } from './student';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Course, (course) => course.students)
  @JoinTable()
  courses?: Course[];

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: number;

  @Column()
  isActive: boolean;

  //@Column()
  //student: Student;

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

  @ManyToOne(() => Lesson, (lesson) => lesson.person, { onDelete: 'CASCADE' })
  lesson: Lesson;
}
