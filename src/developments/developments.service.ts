import { Injectable } from '@nestjs/common';
import { CreateDevelopmentInput } from './dto/create-development.input';
import { UpdateDevelopmentInput } from './dto/update-development.input';

@Injectable()
export class DevelopmentsService {
  create(createDevelopmentInput: CreateDevelopmentInput) {
    return 'This action adds a new development';
  }

  findAll() {
    return `This action returns all developments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} development`;
  }

  update(id: number, updateDevelopmentInput: UpdateDevelopmentInput) {
    return `This action updates a #${id} development`;
  }

  remove(id: number) {
    return `This action removes a #${id} development`;
  }
}
