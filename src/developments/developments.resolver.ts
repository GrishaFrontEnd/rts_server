import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DevelopmentsService } from './developments.service';
import { Development } from './entities/development.entity';
import { CreateDevelopmentInput } from './dto/create-development.input';
import { UpdateDevelopmentInput } from './dto/update-development.input';

@Resolver(() => Development)
export class DevelopmentsResolver {
  constructor(private readonly developmentsService: DevelopmentsService) {}

  @Mutation(() => Development)
  createDevelopment(@Args('createDevelopmentInput') createDevelopmentInput: CreateDevelopmentInput) {
    return this.developmentsService.create(createDevelopmentInput);
  }

  @Query(() => [Development], { name: 'developments' })
  findAll() {
    return this.developmentsService.findAll();
  }

  @Query(() => Development, { name: 'development' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.developmentsService.findOne(id);
  }

  @Mutation(() => Development)
  updateDevelopment(@Args('updateDevelopmentInput') updateDevelopmentInput: UpdateDevelopmentInput) {
    return this.developmentsService.update(updateDevelopmentInput.id, updateDevelopmentInput);
  }

  @Mutation(() => Development)
  removeDevelopment(@Args('id', { type: () => Int }) id: number) {
    return this.developmentsService.remove(id);
  }
}
