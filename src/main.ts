import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import {
  CorsConfig,
  NestConfig,
  SwaggerConfig,
} from './utils/configs/config.interface';
import { PrismaService } from './utils/prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  const { httpAdapter } = app.get(HttpAdapterHost);
  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const corsConfig = configService.get<CorsConfig>('cors');
  const swaggerConfig = configService.get<SwaggerConfig>('swagger');

  if (swaggerConfig.enabled) {
    const options = new DocumentBuilder()
      .setTitle(swaggerConfig.title || 'rts api')
      .setDescription(swaggerConfig.description || 'nestjs rts api')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(swaggerConfig.path || 'api', app, document);
  }

  if (corsConfig.enabled) {
    app.enableCors();
  }

  const PORT = process.env.PORT || nestConfig.port || 5000;

  await app.listen(PORT);
}
bootstrap();
