import { Lesson } from './Lesson';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comments {
  @PrimaryGeneratedColumn()
  commentId: number;

  @Column()
  personId: number;

  @Column({ type: 'text' })
  comment: string;

  @ManyToOne(() => Lesson, (course) => course.comments, { onDelete: 'CASCADE' })
  lesson: Lesson;
}
