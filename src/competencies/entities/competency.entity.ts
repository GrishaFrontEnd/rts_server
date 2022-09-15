import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Competency {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
