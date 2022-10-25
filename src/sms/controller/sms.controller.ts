/* eslint-disable prettier/prettier */
import {
    Controller, Post, 
  } from '@nestjs/common';
  import {SmsService } from '../service/sms.service';
  
  //import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
  //import RequestWithUser from '../authentication/requestWithUser.interface';
   
  @Controller('mensajes')  
  export class SmsController {
    constructor(
      private readonly smsService: SmsService
    ) {}
   
    @Post('send')    
    async initiatePhoneNumberVerification() {    
      await this.smsService.initiatePhoneNumberVerification("+584265821398","no se pudo");
    }
  }
