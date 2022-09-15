import { Field, registerEnumType } from '@nestjs/graphql';
import { Role } from '@prisma/client';
import { IsString } from 'class-validator';
import 'reflect-metadata';
import { BaseModel } from 'src/utils/models/base-model.entity';

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

export class User extends BaseModel {
  @Field()
  @IsString()
  login: string;

  @Field(() => String)
  @IsString()
  password: string;

  @Field(() => Role)
  role: Role;
}
