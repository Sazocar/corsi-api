import { Course } from 'src/courses/entities/course';
import { Person } from 'src/person/entities/person';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Suscribed {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Course, (course) => course.suscribeds, {
    onDelete: 'CASCADE',
  })
  course: Course;

  @ManyToOne(() => Person, (person) => person.suscribed, {
    onDelete: 'CASCADE',
  })
  person: Person;
}
