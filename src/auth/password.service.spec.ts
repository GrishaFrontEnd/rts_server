import { ConfigService } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "src/utils/prisma/prisma.service";
import { PasswordService } from "./password.service"

describe('PasswordService', () => {
    let service: PasswordService;
    
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PasswordService, PrismaService, ConfigService]
        }).compile();

        service=module.get<PasswordService>(PasswordService);
    });

    if('should be defined', () => {
        expect(service).toBeDefined();
    })
});