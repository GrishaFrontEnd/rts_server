import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import path from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import config from './utils/configs/config';
import { GqlConfigService } from './gql-config.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './utils/prisma/prisma.module';
import { NewsModule } from './news/news.module';
import { EmployeesModule } from './employees/employees.module';
import { CoursesModule } from './courses/courses.module';
import { CompetenciesModule } from './competencies/competencies.module';
import { DevelopmentsModule } from './developments/developments.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
      load: [config],
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),
    AuthModule,
    PrismaModule,
    NewsModule,
    EmployeesModule,
    CoursesModule,
    CompetenciesModule,
    DevelopmentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
