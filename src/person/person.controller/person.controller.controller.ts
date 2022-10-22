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
import { person } from '../entities/person';
import { PersonServicesService } from '../person.services/person.services.service';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { createpersondto, UpdatepersonDto } from '../dto/person.dto';

@Controller('person')
export class PersonControllerController {
  constructor(private service: PersonServicesService) {}
  @Get('getall')
  getall() {
    return this.service.getall();
  }
  @Get('id')
  findOne(@Param('id', ParseIntPipe) id: number): person {
    return this.service.getperson(id);
  }
  @Post()
  createperson(@Body() payload: createpersondto): person {
    return this.service.createperson(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdatepersonDto,
  ): person {
    return this.service.updateperson(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): person[] {
    return this.service.deletperson(id);
  }
}
