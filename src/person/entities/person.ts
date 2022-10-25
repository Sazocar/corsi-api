import { Course } from 'src/courses/entities/course';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToMany(() => Course, (course) => course.students)
  courses?: Course[];
  @Column()
  name: string;
  @Column()
  surname: string;
  @Column()
  email: string;
  @Column()
  phone?: number;
  @Column()
  isActive: boolean;
}
