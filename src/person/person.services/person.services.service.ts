import { Injectable } from '@nestjs/common';
import { Course } from 'src/courses/entities/course';
import { createpersondto, UpdatepersonDto } from '../dto/person.dto';
import { person } from '../entities/person';
import { student } from '../entities/student';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class PersonServicesService {
  private counter = 1;
  private persons: person[] = [];

  suscribeservice(student: student, course: Course) {
    student.courses.push(course);
    course.students.push(student);
  }

  createperson(data: createpersondto) {
    this.counter += 1;
    const newperson = {
      id: this.counter,
      ...data,
    };
    this.persons.push(newperson);
    return newperson;
  }

  getperson(id: number): person {
    const person = this.persons.find((person) => person.id === id);
    if (!person) {
      throw new NotFoundException(`Course with id #${id} not found`);
    } else {
      return person;
    }
  }
  getall() {
    return this.persons;
  }

  deletperson(id: number): person[] {
    const persontodelete = this.getperson(id);
    if (!persontodelete) {
      throw new NotFoundException(`person with id #${id} not found`);
    } else {
      const newpersonArray: person[] = this.persons.filter(
        (person) => person.id != id,
      );
      this.persons = newpersonArray;
      return this.persons;
    }
  }
  updateperson(id: number, changes: UpdatepersonDto): person {
    const personToUpdate = this.getperson(id);
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
