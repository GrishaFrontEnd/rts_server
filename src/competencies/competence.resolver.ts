import { Args, Query, Resolver } from '@nestjs/graphql';
import { CompetenceService } from './competence.service';

@Resolver('competence')
export class CompetenceResolvers {
  constructor(private readonly competenceService: CompetenceService) {}

  @Query('competence')
  async getAll() {
    return this.competenceService.getAll();
  }

  @Query('competence')
  async getOne(@Args('id') args: string) {
    return this.competenceService.getOne();
  }
}
