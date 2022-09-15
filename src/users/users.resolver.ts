import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { UserEntity } from 'src/utils/decorators/user.decorator';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
@UseGuards(GqlAuthGuard)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User)
  async me(@UserEntity() user: User): Promise<User> {
    return user;
  }
}
