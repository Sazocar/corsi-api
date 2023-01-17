import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LessonInfraestructure } from './Lesson';
import { Person } from 'src/Person/Infrastructure/entities/person';

@Entity()
export class CourseInfraestructure {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  courseId: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(() => LessonInfraestructure, (lesson) => lesson.course)
  lessons: LessonInfraestructure[];

  @Column()
  categories: string; // Should be an Category[] in the future

  @Column()
  keywords: string;

  @Column({ default: 'Created' })
  state: string;

  @ManyToMany(() => Person, (person) => person.courses)
  students?: Person[];

  @Column({ type: 'varchar', length: 255 })
  imageUrl: string;

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

  static create(
    id: number,
    courseId: string,
    title: string,
    description: string,
    lessons: LessonInfraestructure[],
    categories: string,
    keywords: string,
    state: string,
    imageUrl: string,
    students?: Person[],
  ): CourseInfraestructure {
    const courseInfraestructure = new CourseInfraestructure();
    courseInfraestructure.id = id;
    courseInfraestructure.courseId = courseId;
    courseInfraestructure.title = title;
    courseInfraestructure.description = description;
    courseInfraestructure.lessons = lessons;
    courseInfraestructure.categories = categories;
    courseInfraestructure.keywords = keywords;
    courseInfraestructure.state = state;
    courseInfraestructure.imageUrl = imageUrl;
    courseInfraestructure.students = students;

    return courseInfraestructure;
  }
}
