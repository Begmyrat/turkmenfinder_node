import { PrismaService } from '../prisma/prisma.service';
import { CreateInterestDto, UpdateInterestDto } from './dto';
export declare class InterestsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateInterestDto): Promise<{
        name: string;
        id: string;
    }>;
    findAll(): Promise<{
        name: string;
        id: string;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        id: string;
    }>;
    update(id: string, dto: UpdateInterestDto): Promise<{
        name: string;
        id: string;
    }>;
    remove(id: string): Promise<{
        name: string;
        id: string;
    }>;
}
