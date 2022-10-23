import { Injectable } from '@nestjs/common';
import { Course } from 'src/courses/entities/course';
import { CreatePersonDto, UpdatePersonDto } from '../dto/person.dto';
import { Person } from '../entities/person';
import { Student } from '../entities/student';
import { NotFoundException } from '@nestjs/common/exceptions';
import { CoursesService } from 'src/courses/services/courses.service';

@Injectable()
export class PersonService {
  private counter = 1;
  private persons: Person[] = [];
  constructor(private CourService: CoursesService) {}

  SuscribeService(studentid: number, courseid: number) {
    const a = this.GetPerson(studentid);
    const b = this.CourService.getCourse(courseid);
    a.courses.push(b);
    b.students.push(a);
  }

  createperson(data: CreatePersonDto) {
    this.counter += 1;
    const newperson = {
      id: this.counter,
      ...data,
    };
    this.persons.push(newperson);
    return newperson;
  }

  GetPerson(id: number): Person {
    const person = this.persons.find((person) => person.id === id);
    if (!person) {
      throw new NotFoundException(`Course with id #${id} not found`);
    } else {
      return person;
    }
  }
  GetAll() {
    return this.persons;
  }

  DeletPerson(id: number): Person[] {
    const persontodelete = this.GetPerson(id);
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
  updatePerson(id: number, changes: UpdatePersonDto): Person {
    const personToUpdate = this.GetPerson(id);
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
