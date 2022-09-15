import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Employee } from 'src/employees/entities/employee.entity';
import { BaseModel } from 'src/utils/models/base-model.entity';

@ObjectType()
export class Course extends BaseModel {
  @Field(() => Text)
  descriptionCourse: Text;

  @Field(() => [String])
  finallyCompetence: string[];

  @Field(() => [String])
  imagesCourse: string[];

  @Field(() => [Employee])
  teachers: Employee[];
}
