import {
  INestApplication,
  Inject,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger();
  constructor(@Inject(PRISMA_OPTIONS) options: PrismaModuleOptions) {
    super({
      errorFormat: 'minimal',
      log: options.logQueries
        ? [
            {
              level: 'query',
              emit: 'event',
            },
          ]
        : undefined,
    });
  }
  async onModuleInit() {
    await this.$connect();
  }
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
