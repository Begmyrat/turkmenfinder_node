import { AgreementsService } from './agreements.service';
import { CreateAgreementDto } from './dto';
export declare class AgreementsController {
    private readonly service;
    constructor(service: AgreementsService);
    create(dto: CreateAgreementDto): import("@prisma/client").Prisma.Prisma__AgreementClient<{
        id: string;
        version: string;
        content: string;
        createdAt: Date;
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
        version: string;
        content: string;
        createdAt: Date;
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
        version: string;
        content: string;
        createdAt: Date;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
