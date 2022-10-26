/* eslint-disable prettier/prettier */
import nodemailer = require('nodemailer');
export class MailService {
    
    sendEmail(email:string,message:string){
    return nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'ravenscorsi@gmail.com', // generated ethereal user
          pass: 'qbckgpouncqwbklm', // generated ethereal password
        },
      }).sendMail({
        from: 'ravenscorsi@gmail.com', // sender address
        to: email, // list of receivers
        subject: "Le mando nudes a carlos si esta chingada sirve", // Subject line
        html: message,
      });
    }
     
    
}
