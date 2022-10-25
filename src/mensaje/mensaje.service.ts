import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';
//import { PersonService } from '../person/person.services/person.services.service';

@Injectable()
export class SmsService {
  private twilioClient: Twilio;

  constructor() {
    const accountSid = 'AC5273987fc445241a3e7fb48dcc8b2706';
    const authToken = 'a6c73bf5f24d0fc71859b282b9135628';

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
