import { PrismaService } from '../prisma/prisma.service';
import { CreateAgreementDto } from './dto';
export declare class AgreementsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateAgreementDto): import("@prisma/client").Prisma.Prisma__AgreementClient<{
        id: string;
        createdAt: Date;
        content: string;
        version: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        acceptances: {
            id: string;
            userId: string;
            agreementId: string;
            acceptedAt: Date;
        }[];
    } & {
        id: string;
        createdAt: Date;
        content: string;
        version: string;
    })[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__AgreementClient<({
        acceptances: {
            id: string;
            userId: string;
            agreementId: string;
            acceptedAt: Date;
        }[];
    } & {
        id: string;
        createdAt: Date;
        content: string;
        version: string;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
