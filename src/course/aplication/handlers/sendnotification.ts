import { ICoursehandlers } from "src/course/domain/domain_events/events/handlers/coursehandler";
import { IemailSender } from "../port/Iemailsender";
import { CourseStateChanged } from "src/course/domain/domain_events/events/statecoursechanged";

class SendNotification extends ICoursehandlers {
  sender: IemailSender;
  handle(e: CourseStateChanged) {
    message:`el estado del curso ha cambiado a ${e.course.state} el dia ${e.time}`;
    this.sender.sendEmail(,message);
    }
   constructor(sender:IemailSender) {
       super();
    this.sender=sender;
   }
}