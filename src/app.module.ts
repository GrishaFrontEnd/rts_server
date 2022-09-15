import { Module } from '@nestjs/common';
import { NewsModule } from './news/news.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { DevelopmentsModule } from './developments/developments.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import path from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    NewsModule,
    RolesModule,
    UsersModule,
    EmployeesModule,
    DevelopmentsModule,
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: false,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
