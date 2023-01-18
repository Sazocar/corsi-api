import { IrepositoryUser } from 'src/User/Domain/IrepositoryUser';
import { Course } from '../course';
import { Icourserepository } from '../courserepository';
import { CourseID } from 'src/shared/value_objects/idcourse';
import { UserEmail } from 'src/User/Domain/Value_Objects/userEmail';
export class GetEmails {
  repositoryperson: IrepositoryUser;
  repositorycourse: Icourserepository;
  constructor(s: IrepositoryUser, d: Icourserepository) {
    this.repositoryperson = s;
    this.repositorycourse = d;
  }
  getEmails(idcourse: CourseID): Array<string> {
    const course = this.repositorycourse.getById(idcourse);
    const persons = course.getstudents;
    const emails = [];
    for (let i = 0; i <= persons.length; i++) {
      const aux = this.repositoryperson.getById(persons[i].id);
      emails.push(aux[0].getUserEmail);
    }
    return emails;
  }
}
