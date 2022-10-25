import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Twilio } from 'twilio';
//import { PersonService } from '../person/person.services/person.services.service';

@Injectable()
export class SmsService {
  private twilioClient: Twilio;

  constructor(private readonly configService: ConfigService) {
    const accountSid = configService.get('TWILIO_ACCOUNT_SID');
    const authToken = configService.get('TWILIO_AUTH_TOKEN');

    this.twilioClient = new Twilio(accountSid, authToken);
  }
  initiatePhoneNumberVerification(phoneNumber: string, body: string) {
    const serviceSid = '+13865304793';
    return this.twilioClient.messages
      .create({
        body: body,
        from: serviceSid,
        to: phoneNumber,
      })
      .then((message) => console.log(message.sid));
  }
}
