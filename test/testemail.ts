import { MemoryImpIuser } from 'src/User/Infrastructure/memoryimpIuserrepo';
import { GetEmails } from 'src/course/domain/domain service/getemails';
import { MemoryImpCourses } from 'src/course/infrastructure/repositories/inmemoryadapter';

const repo1 = new MemoryImpIuser();
const repo2 = new MemoryImpCourses();
const getemail = new GetEmails(repo1, repo2);

const aux = repo1.getAll();
for (const i of aux) {
  console.log(i);
}
