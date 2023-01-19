import { ICourseRepository } from 'src/course/domain/ICourseRepository';
import { Course } from 'src/course/domain/course';

export class GethPublishedService {
  async execute(iCourseRepository: ICourseRepository): Promise<Course[]> {
    return await iCourseRepository.findPublishedCourses();
  }
}
