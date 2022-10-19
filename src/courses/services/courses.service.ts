import { Injectable } from '@nestjs/common';
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
    return this.courses.find(item => item.id === id)
  }

}
