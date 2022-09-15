import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './utils/prisma/prisma.service';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  await app.listen(PORT);
}
bootstrap();
