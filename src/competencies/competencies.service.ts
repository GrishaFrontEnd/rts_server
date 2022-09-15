import { Injectable } from '@nestjs/common';
import { CreateCompetencyInput } from './dto/create-competency.input';
import { UpdateCompetencyInput } from './dto/update-competency.input';

@Injectable()
export class CompetenciesService {
  create(createCompetencyInput: CreateCompetencyInput) {
    return 'This action adds a new competency';
  }

  findAll() {
    return `This action returns all competencies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} competency`;
  }

  update(id: number, updateCompetencyInput: UpdateCompetencyInput) {
    return `This action updates a #${id} competency`;
  }

  remove(id: number) {
    return `This action removes a #${id} competency`;
  }
}
