import { Injectable } from '@nestjs/common';
import { CreatePersonDto, UpdatePersonDto } from '../dto/person.dto';
import { Person } from '../entities/person';
import { Student } from '../entities/student';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ConflictException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { In, Repository } from 'typeorm';
import { CourseInfraestructure } from 'src/course/infrastructure/entities/course';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person) private personRepo: Repository<Person>,
    @InjectRepository(CourseInfraestructure)
    private courseRepo: Repository<CourseInfraestructure>,
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

  async removeCourseByPerson(personId: number, courseId: number) {
    const person = await this.personRepo.findOne({
      where: { id: personId },
      relations: ['courses'],
    });
    person.courses = person.courses.filter((item) => item.id !== courseId);
    return this.personRepo.save(person);
  }

  async suscribe(personId: number, courseId: number) {
    const person = await this.personRepo.findOne({
      where: { id: personId },
      relations: ['courses'],
    });
    if (!person.isActive) {
      throw new ConflictException(`Person ${person.name} is not active`);
    }
    const course = await this.courseRepo.findOneBy({ id: courseId });
    if (!course) {
      throw new NotFoundException(`Course #${courseId} not found`);
    }
    if (course.state !== 'Published') {
      throw new ConflictException(`Course ${course.title} is not published`);
    }
    if (!person.courses.find((item) => item.id == courseId)) {
      person.courses.push(course);
    } else {
      throw new ConflictException(`Course: ${courseId} already exists`);
    }
    return this.personRepo.save(person);
  }
}
