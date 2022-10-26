import { Injectable } from '@nestjs/common';
import { Course } from 'src/courses/entities/course';
import { CreatePersonDto, UpdatePersonDto } from '../dto/person.dto';
import { Person } from '../entities/person';
import { Student } from '../entities/student';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person) private personRepo: Repository<Person>,
  ) {}

  /* suscribeService(student: Student, course: Course) {
    student.courses.push(course);
    course.students.push(student);
  }*/
  getAll() {
    return this.personRepo.find();
  }
  
  async getPerson(id: number) {
    const person = await this.personRepo.findOneBy({ id: id });
    if (!person) {
      throw new NotFoundException(`Person with id #${id} not found`);
    }
    return person;
  }

  createPerson(data: CreatePersonDto) {
    const newperson = this.personRepo.create(data);
    return this.personRepo.save(newperson);
  }

  deletPerson(id: number) {
    return this.personRepo.delete(id);
  }
  async updatePerson(id: number, changes: UpdatePersonDto) {
    const person = await this.personRepo.findOneBy({ id: id });
    this.personRepo.merge(person, changes);
    return this.personRepo.save(person);
  }
}
