import { Test, TestingModule } from '@nestjs/testing';
import { DevelopmentsResolver } from './developments.resolver';
import { DevelopmentsService } from './developments.service';

describe('DevelopmentsResolver', () => {
  let resolver: DevelopmentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevelopmentsResolver, DevelopmentsService],
    }).compile();

    resolver = module.get<DevelopmentsResolver>(DevelopmentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
