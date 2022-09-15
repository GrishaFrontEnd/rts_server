import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Development {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
