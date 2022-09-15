import { Module } from '@nestjs/common';
import { DevelopmentsService } from './developments.service';
import { DevelopmentsResolver } from './developments.resolver';

@Module({
  providers: [DevelopmentsResolver, DevelopmentsService]
})
export class DevelopmentsModule {}
