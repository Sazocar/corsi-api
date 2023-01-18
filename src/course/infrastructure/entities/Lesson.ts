import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CourseInfraestructure } from './course';

@Entity()
export class LessonInfraestructure {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 255 })
  videoUrl: string;

  @Column({ type: 'varchar', length: 255 })
  lessonId: string;

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

  @ManyToOne(() => CourseInfraestructure, (course) => course.lessons, {
    onDelete: 'CASCADE',
  })
  course: CourseInfraestructure;
  static create(
    title: string,
    description: string,
    videoUrl: string,
    lessonId: string,
  ): LessonInfraestructure {
    const lessonInfraestructure = new LessonInfraestructure();
    lessonInfraestructure.title = title;
    lessonInfraestructure.description = description;
    lessonInfraestructure.videoUrl = videoUrl;
    lessonInfraestructure.lessonId = lessonId;
    return lessonInfraestructure;
  }
}
