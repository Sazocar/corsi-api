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
  @Get('getall')
  getAll() {
    return this.service.GetAll();
  }
  @Get('id')
  findOne(@Param('id', ParseIntPipe) id: number): Person {
    return this.service.GetPerson(id);
  }
  @Post()
  createPerson(@Body() payload: CreatePersonDto): Person {
    return this.service.createperson(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdatePersonDto,
  ): Person {
    return this.service.updatePerson(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Person[] {
    return this.service.DeletPerson(id);
  }
}
