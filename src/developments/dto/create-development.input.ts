import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDevelopmentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
