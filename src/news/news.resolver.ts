import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NewsService } from './news.service';
import { CreateNewsInput } from './dto/create-news.input';
import { UpdateNewsInput } from './dto/update-news.input';

@Resolver('News')
export class NewsResolver {
  constructor(private readonly newsService: NewsService) {}

  @Mutation('createNews')
  create(@Args('createNewsInput') createNewsInput: CreateNewsInput) {
    return this.newsService.create(createNewsInput);
  }

  @Query('news')
  findAll() {
    return this.newsService.findAll();
  }

  @Query('news')
  findOne(@Args('id') id: number) {
    return this.newsService.findOne(id);
  }

  @Mutation('updateNews')
  update(@Args('updateNewsInput') updateNewsInput: UpdateNewsInput) {
    return this.newsService.update(updateNewsInput.id, updateNewsInput);
  }

  @Mutation('removeNews')
  remove(@Args('id') id: number) {
    return this.newsService.remove(id);
  }
}
