import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma/prisma.service';

@Injectable()
export class CompetenceService {
  constructor(private readonly prisma: PrismaService) {}

  async create() {}

  async getAll() {}

  async getOne() {}

  async update() {}

  async delete() {}
}
