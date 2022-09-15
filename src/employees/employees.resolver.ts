import { Resolver } from '@nestjs/graphql';
import { EmployeesService } from './employees.service';

@Resolver('Employee')
export class EmployeesResolver {
  constructor(private readonly employeesService: EmployeesService) {}
}
