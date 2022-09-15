import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseModel } from 'src/utils/models/base-model.entity';

@ObjectType()
export class News extends BaseModel {
  @Field(() => String, { description: 'Название новости' })
  title: string;
  @Field(() => [String], { description: 'Изображения относящиеся к новости' })
  images: string[];
  @Field(() => Date, { description: 'Время события' })
  eventDate: Date;
  @Field(() => Boolean, { description: 'Статус события' })
  activeStatus: boolean;
  @Field(() => Text, { description: 'Текст новости' })
  description: Text;
}
