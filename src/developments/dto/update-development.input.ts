import { CreateDevelopmentInput } from './create-development.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDevelopmentInput extends PartialType(CreateDevelopmentInput) {
  @Field(() => Int)
  id: number;
}
