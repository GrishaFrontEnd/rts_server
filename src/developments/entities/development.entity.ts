import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseModel } from 'src/utils/models/base-model.entity';

@ObjectType()
export class Development extends BaseModel {
  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  techniqueAttribute: string;

  @Field(() => [String])
  partners: string;

  @Field(() => Date)
  statusDate: Date;

  @Field(() => Boolean)
  isComplete: boolean;

  @Field(() => [String])
  images: string[];
}
