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
import {
  CreatePersonDto,
  UpdatePersonDto,
  UpdatePersonSuscriptionDto,
} from '../dto/person.dto';

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

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.deletPerson(id);
  }

  /*@Put('suscribe/:id')
  suscribir(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdatePersonSuscriptionDto,
  ) {
    return this.service.suscribe(id, payload);
  }*/
}
