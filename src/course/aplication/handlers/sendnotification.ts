import { ICoursehandlers } from "src/course/domain/domain_events/events/handlers/coursehandler";
import { IemailSender } from "../port/Iemailsender";
import { CourseStateChanged } from "src/course/domain/domain_events/events/statecoursechanged";
import { GetEmails } from "src/course/domain/domain service/getemails";
import { IrepositoryUser } from "src/User/Domain/IrepositoryUser";
import { Icourserepository } from "src/course/domain/courserepository";

class SendNotification extends ICoursehandlers {
  sender: IemailSender;
  handle(e: CourseStateChanged) {
    message:`el estado del curso ha cambiado a ${e.course.getstate()} el dia ${e.time}`;
    const mails=new GetEmails();
    for(const mail of mails ){
    this.sender.sendEmail(,message);
    }
    }
   constructor(sender:IemailSender) {
       super();
    this.sender=sender;
   }
}