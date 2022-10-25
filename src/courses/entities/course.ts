import { Person } from 'src/person/entities/person';
import { Lesson } from 'src/Lesson/Entities/Lesson';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Suscribed } from 'src/suscribe/Entities/suscribed';

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

  @Column()
  state: string;

  @OneToMany(() => Suscribed, (suscribed) => suscribed.course)
  suscribeds: Suscribed[];

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
