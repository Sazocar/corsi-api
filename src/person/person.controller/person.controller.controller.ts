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
import { PersonServicesService } from '../person.services/person.services.service';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { CreatePersonDto, UpdatePersonDto } from '../dto/person.dto';

@Controller('person')
export class PersonControllerController {
  constructor(private service: PersonServicesService) {}
  @Get('getall')
  getall() {
    return this.service.getAll();
  }
  @Get('id')
  findOne(@Param('id', ParseIntPipe) id: number): Person {
    return this.service.getPerson(id);
  }
  @Post()
  createPerson(@Body() payload: CreatePersonDto): Person {
    return this.service.createPerson(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdatePersonDto,
  ): Person {
    return this.service.updateperson(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Person[] {
    return this.service.deletperson(id);
  }
}
