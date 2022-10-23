import { Injectable } from '@nestjs/common';
import { Course } from 'src/courses/entities/course';
import { CreatePersonDto, UpdatePersonDto } from '../dto/person.dto';
import { Person } from '../entities/person';
import { Student } from '../entities/student';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class PersonService {
  private counter = 1;
  private persons: Person[] = [];

  suscribeService(student: Student, course: Course) {
    student.courses.push(course);
    course.students.push(student);
  }

  createPerson(data: CreatePersonDto) {
    this.counter += 1;
    const newperson = {
      id: this.counter,
      ...data,
    };
    this.persons.push(newperson);
    return newperson;
  }

  getPerson(id: number): Person {
    const person = this.persons.find((person) => person.id === id);
    if (!person) {
      throw new NotFoundException(`Course with id #${id} not found`);
    } else {
      return person;
    }
  }
  getAll() {
    return this.persons;
  }

  deletperson(id: number): Person[] {
    const persontodelete = this.getPerson(id);
    if (!persontodelete) {
      throw new NotFoundException(`person with id #${id} not found`);
    } else {
      const newpersonArray: Person[] = this.persons.filter(
        (person) => person.id != id,
      );
      this.persons = newpersonArray;
      return this.persons;
    }
  }
  updateperson(id: number, changes: UpdatePersonDto): Person {
    const personToUpdate = this.getPerson(id);
    if (!personToUpdate) {
      throw new NotFoundException(`person with id #${id} not found`);
    } else {
      const index = this.persons.findIndex((person) => person.id === id);
      this.persons[index] = {
        ...personToUpdate,
        ...changes,
      };
      return this.persons[index];
    }
  }
}
