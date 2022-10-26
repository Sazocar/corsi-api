import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Put,
} from '@nestjs/common';
import { get } from 'http';
import { Person } from '../entities/person';
import { PersonService } from '../person.services/person.services.service';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { CreatePersonDto, UpdatePersonDto } from '../dto/person.dto';

@Controller('person')
export class PersonController {
  constructor(private service: PersonService) {}
  @Get()
  findperson() {
    return this.service.getAll();
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.getPerson(id);
  }
  @Post()
  createPerson(@Body() payload: CreatePersonDto) {
    return this.service.createPerson(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdatePersonDto,
  ) {
    return this.service.updatePerson(id, payload);
  }

  @Put(':id/course/:courseId')
  suscribe(
    @Param('id', ParseIntPipe) id: number,
    @Param('courseId', ParseIntPipe) courseId: number,
  ) {
    return this.service.suscribe(id, courseId);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.deletPerson(id);
  }

  @Delete(':id/course/:courseId')
  deleteCourse(
    @Param('id', ParseIntPipe) id: number,
    @Param('courseId', ParseIntPipe) courseId: number,
  ) {
    return this.service.removeCourseByPerson(id, courseId);
  }
}
