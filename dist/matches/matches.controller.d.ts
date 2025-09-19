import { MatchesService } from './matches.service';
export declare class MatchesController {
    private readonly service;
    constructor(service: MatchesService);
    findMatches(userId: string): import("@prisma/client").Prisma.PrismaPromise<({
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
        userAId: string;
        userBId: string;
        createdAt: Date;
    })[]>;
}
