import { Test, TestingModule } from '@nestjs/testing';
import { CompetenciesResolver } from './competencies.resolver';
import { CompetenciesService } from './competencies.service';

describe('CompetenciesResolver', () => {
  let resolver: CompetenciesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompetenciesResolver, CompetenciesService],
    }).compile();

    resolver = module.get<CompetenciesResolver>(CompetenciesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
