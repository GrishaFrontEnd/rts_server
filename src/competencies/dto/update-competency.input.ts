import { CreateCompetencyInput } from './create-competency.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCompetencyInput extends PartialType(CreateCompetencyInput) {
  @Field(() => Int)
  id: number;
}
