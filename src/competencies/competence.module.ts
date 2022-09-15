import { Module } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma/prisma.service';
import { CompetenceService } from './competence.service';

@Module({
  providers: [CompetenceService, PrismaService],
})
export class CompetenceModule {}
