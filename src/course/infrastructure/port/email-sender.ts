import nodemailer = require('nodemailer');
import { ISendNotificationStatusChange } from 'src/course/aplication/port/Iemailsender';
class EmailSender implements ISendNotificationStatusChange {
  sendEmail(email: string, message: string) {
    return nodemailer
      .createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'ravenscorsi@gmail.com', // generated ethereal user
          pass: 'qbckgpouncqwbkl', // generated ethereal password
        },
      })
      .sendMail({
        from: 'ravenscorsi@gmail.com', // sender address
        to: email, // list of receivers
        subject: 'Cambio del estado del curso', // Subject line
        html: message,
      });
  }
}
