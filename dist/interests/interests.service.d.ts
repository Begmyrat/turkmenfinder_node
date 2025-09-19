import { PrismaService } from '../prisma/prisma.service';
import { CreateInterestDto, UpdateInterestDto } from './dto';
export declare class InterestsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateInterestDto): Promise<{
        id: string;
        name: string;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
    }>;
    update(id: string, dto: UpdateInterestDto): Promise<{
        id: string;
        name: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
    }>;
}
