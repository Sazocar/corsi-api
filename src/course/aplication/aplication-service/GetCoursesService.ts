import { ICourseRepository } from 'src/course/domain/ICourseRepository';
import { Course } from 'src/course/domain/course';

export class GetCoursesService {
  async execute(iCourseRepository: ICourseRepository): Promise<Course[]> {
    return await iCourseRepository.findCourses();
  }
}
