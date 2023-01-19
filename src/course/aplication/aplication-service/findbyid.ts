import { ICourseRepository } from 'src/course/domain/ICourseRepository';
import { Course } from 'src/course/domain/course';
import { CourseID } from 'src/shared/value_objects/idcourse';

export class FindById {
  id: CourseID;
  constructor(id: CourseID) {
    this.id = id;
  }
  async execute(iCourseRepository: ICourseRepository): Promise<Course> {
    return await iCourseRepository.findCourse(this.id);
  }
}
