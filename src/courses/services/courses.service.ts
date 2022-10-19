import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto, UpdateCourseDto } from '../dtos/course.dto';
import { Course } from '../entities/course';

@Injectable()
export class CoursesService {
  private counterId: number = 1;
  private courses: Course[] = [
    {
      id: 1,
      title: 'Curso Basico de NestJS',
      description: 'Aprende desarrollo web con NestJS, el framework de Node.js con mayor crecimiento. Conoce la estructura de proyectos backend en JavaScript con arquitectura escalable y construye una API REST siguiendo buenas prácticas de integrabilidad de datos. Impulsa tu carrera profesional como backend developer con tu profesor Nicolas Molina.',
      lessons: 'Lección 1',
      categories: "Programacion",
      keywords: 'nestjs',
      state: 'Created'
    },
  ];

  getAllCourses(): Course[] {
    return this.courses;
  }

  getCourse(id: number): Course {
    const course = this.courses.find(course => course.id === id);
    if (!course) {
      throw new NotFoundException(`Course with id #${id} not found`);
    } else {
       return course;
    }
  }

  createCourse(data: CreateCourseDto): Course {
    this.counterId += 1;
    const newCourse = {
      id: this.counterId,
      ...data,
    }
    this.courses.push(newCourse);
    return newCourse;
  }

  updateCourse(id: number, changes: UpdateCourseDto): Course {
    const courseToUpdate = this.getCourse(id);
    if (!courseToUpdate) {
      throw new NotFoundException(`Course with id #${id} not found`);
    } else {
      const index = this.courses.findIndex((item) => item.id === id);
      this.courses[index] = {
        ...courseToUpdate,
        ...changes,
      };
      return this.courses[index];
    }
  }

}
