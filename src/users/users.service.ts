import { Injectable } from '@nestjs/common';
import { PasswordService } from 'src/auth/password.service';
import { PrismaService } from 'src/utils/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService,
  ) {}
}
