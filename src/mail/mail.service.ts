/* eslint-disable prettier/prettier */
import nodemailer = require('nodemailer');
export class MailService {
    
    sendEmail(){
    return nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'ravenscorsi@gmail.com', // generated ethereal user
          pass: 'qbckgpouncqwbklm', // generated ethereal password
        },
      });
    }
     
    
}
