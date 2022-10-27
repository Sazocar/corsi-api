import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateCourseDto, UpdateCourseDto } from '../dtos/course.dto';
import { Course } from '../entities/course';
import nodemailer = require('nodemailer');

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course) private courseRepo: Repository<Course>,
  ) {}

  getAllCourses() {
    return this.courseRepo.find({
      relations: ['lessons'],
    });
  }

  async getCourse(id: number) {
    const course = await this.courseRepo.findOne({
      where: { id: id },
      relations: ['lessons'],
    });
    if (!course) {
      throw new NotFoundException(`Course with id #${id} not found`);
    }
    return course;
  }

  async getCoursebycategory(categories: string) {
    const course = await this.courseRepo.findBy({
      categories: categories,
      state: 'publicado',
    });
    if (!course) {
      throw new NotFoundException(`Courses not found`);
    }
    return course;
  }

  async getCoursebykeyword(keywords: string) {
    const course = await this.courseRepo.findBy({
      keywords: keywords,
      state: 'publicado',
    });
    if (!course) {
      throw new NotFoundException(`Courses not found`);
    }
    return course;
  }

  createCourse(data: CreateCourseDto) {
    const newCourse = this.courseRepo.create(data);
    return this.courseRepo.save(newCourse);
  }

  async updateCourse(id: number, changes: UpdateCourseDto) {
    const course = await this.courseRepo.findOneBy({ id: id });
    if (!course) {
      throw new NotFoundException(`Course with id #${id} not found`);
    }
    this.courseRepo.merge(course, changes);
    return this.courseRepo.save(course);
  }

  async deleteCourse(id: number) {
    const course = await this.courseRepo.findOneBy({ id: id });
    if (!course) {
      throw new NotFoundException(`Course with id #${id} not found`);
    }
    this.courseRepo.delete(id);
    return course;
  }

  async ChangeState(id: number, change: UpdateCourseDto) {
    const course = await this.courseRepo.findOne({
      where: { id: id },
      relations: ['students'],
    });
    console.log(course);
    const { state } = change;
    course.students.forEach((item) =>
      this.sendEmail(
        item.email,
        `Se ha alterado el estado del ${course.title}, de ${course.state} a ${state}`,
      ),
    );

    if (course.state != state) {
      this.courseRepo.merge(course, change);
      return this.courseRepo.save(course);
    }
  }

  sendEmail(email: string, message: string) {
    return nodemailer
      .createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'ravenscorsi@gmail.com', // generated ethereal user
          pass: 'qbckgpouncqwbklm', // generated ethereal password
        },
      })
      .sendMail({
        from: 'ravenscorsi@gmail.com', // sender address
        to: email, // list of receivers
        subject: 'Cambio del estado del curso', // Subject line
        html: message,
      });
  }
}
