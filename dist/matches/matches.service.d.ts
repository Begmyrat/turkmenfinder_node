import { PrismaService } from '../prisma/prisma.service';
export declare class MatchesService {
    private prisma;
    constructor(prisma: PrismaService);
    findMatchesForUser(userId: string): import("@prisma/client").Prisma.PrismaPromise<({
        chatThread: {
            id: string;
            createdAt: Date;
            matchId: string | null;
            participantAId: string;
            participantBId: string;
            lastMessage: string | null;
            lastMessageAt: Date | null;
            unreadCountA: number;
            unreadCountB: number;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        userAId: string;
        userBId: string;
    })[]>;
}
