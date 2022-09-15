import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class SignupInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  login: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  password: string;
}
