import { Resolver } from '@nestjs/graphql';
import { DevelopmentsService } from './developments.service';

@Resolver('Development')
export class DevelopmentsResolver {
  constructor(private readonly developmentsService: DevelopmentsService) {}
}
