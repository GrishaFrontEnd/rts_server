import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseModel } from 'src/utils/models/base-model.entity';

@ObjectType()
export class Competence extends BaseModel {
  @Field(() => String)
  title: string;

  @Field(() => Text)
  shortDescription: Text;

  @Field(() => Text)
  fullDescription: Text;

  @Field(() => [String])
  images: string[];

  @Field(() => Text)
  provision: Text;
}
