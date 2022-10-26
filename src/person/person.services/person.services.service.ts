import { Injectable } from '@nestjs/common';
import { Course } from 'src/courses/entities/course';
import { CreatePersonDto, UpdatePersonDto } from '../dto/person.dto';
import { Person } from '../entities/person';
import { Student } from '../entities/student';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common/exceptions';
import { In, Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person) private personRepo: Repository<Person>,
    @InjectRepository(Course) private courseRepo: Repository<Course>,
  ) {}

  /* suscribeService(student: Student, course: Course) {
    student.courses.push(course);
    course.students.push(student);
  }*/

  async createPerson(data: CreatePersonDto) {
    const newPerson = this.personRepo.create(data);
    if (data.coursesId) {
      const courses = await this.courseRepo.findBy({
        id: In(data.coursesId),
      });
      newPerson.courses = courses;
    }
    return this.personRepo.save(newPerson);
  }

  async getPerson(id: number) {
    const person = await this.personRepo.findOneBy({ id: id });
    if (!person) {
      throw new NotFoundException(`Person with id #${id} not found`);
    }
    return person;
  }
  getAll() {
    return this.personRepo.find({
      relations: ['courses'],
    });
  }

  deletPerson(id: number) {
    return this.personRepo.delete(id);
  }

  async updatePerson(id: number, changes: UpdatePersonDto) {
    const person = await this.personRepo.findOneBy({ id: id });
    if (changes.coursesId) {
      const courses = await this.courseRepo.findBy({
        id: In(changes.coursesId),
      });
      person.courses = courses;
    }
    this.personRepo.merge(person, changes);
    return this.personRepo.save(person);
  }

  async suscribe(idPerson: number, idCourse: number[]) {
    const person = await this.personRepo.findOneBy({ id: idPerson });

    if (idCourse) {
      const courses = await this.courseRepo.findBy({
        id: In(idCourse),
      });
      person.courses = courses;
    }

    return this.personRepo.save(person);
  }
}
