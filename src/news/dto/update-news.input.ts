import { CreateNewsInput } from './create-news.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateNewsInput extends PartialType(CreateNewsInput) {
  id: number;
}
