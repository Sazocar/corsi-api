import { IrepositoryPerson } from 'src/Person/Domain/IrepositoryPerson';
import { Course } from 'src/course/infrastructure/entities/course';

class GetEmails{
  repositoryperson: IrepositoryPerson;
  getEmails(course: Course): Array<string> {
    const persons = course.students;
    for (const person of persons) {
      const aux = this.repositoryperson.getById(person.id);
      

    }
  }
}
