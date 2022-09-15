import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseModel } from 'src/utils/models/base-model.entity';

@ObjectType()
export class Employee extends BaseModel {
  @Field()
  name: string;

  @Field()
  surname: string;

  @Field()
  biography: Text;

  @Field()
  photo: string;
}
