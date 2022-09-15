import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CompetenciesService } from './competencies.service';
import { Competency } from './entities/competency.entity';
import { CreateCompetencyInput } from './dto/create-competency.input';
import { UpdateCompetencyInput } from './dto/update-competency.input';

@Resolver(() => Competency)
export class CompetenciesResolver {
  constructor(private readonly competenciesService: CompetenciesService) {}

  @Mutation(() => Competency)
  createCompetency(@Args('createCompetencyInput') createCompetencyInput: CreateCompetencyInput) {
    return this.competenciesService.create(createCompetencyInput);
  }

  @Query(() => [Competency], { name: 'competencies' })
  findAll() {
    return this.competenciesService.findAll();
  }

  @Query(() => Competency, { name: 'competency' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.competenciesService.findOne(id);
  }

  @Mutation(() => Competency)
  updateCompetency(@Args('updateCompetencyInput') updateCompetencyInput: UpdateCompetencyInput) {
    return this.competenciesService.update(updateCompetencyInput.id, updateCompetencyInput);
  }

  @Mutation(() => Competency)
  removeCompetency(@Args('id', { type: () => Int }) id: number) {
    return this.competenciesService.remove(id);
  }
}
