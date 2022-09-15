import { Module } from '@nestjs/common';
import { CompetenciesService } from './competencies.service';
import { CompetenciesResolver } from './competencies.resolver';

@Module({
  providers: [CompetenciesResolver, CompetenciesService]
})
export class CompetenciesModule {}
