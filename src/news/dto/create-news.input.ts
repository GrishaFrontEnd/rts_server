import { InputType, Int, Field } from '@nestjs/graphql';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateNewsInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  title: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  description: Text;

  @Field(() => [String], { description: '', nullable: true })
  @IsArray()
  images: string[];

  @Field(() => Date)
  eventDate: Date;

  @Field()
  activeStatus: boolean;
}
