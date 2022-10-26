import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Put,
  UseGuards,
} from '@nestjs/common';
import { get } from 'http';
import { Person } from '../entities/person';
import { PersonService } from '../person.services/person.services.service';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { CreatePersonDto, UpdatePersonDto } from '../dto/person.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiBearerAuth()
@ApiTags('Person')
@Controller('person')
export class PersonController {
  constructor(private service: PersonService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.service.getAll();
  }

  @UseGuards(JwtAuthGuard)
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
}
