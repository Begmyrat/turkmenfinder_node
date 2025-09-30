import { MatchesService } from './matches.service';
export declare class MatchesController {
    private readonly service;
    constructor(service: MatchesService);
    findMatches(req: {
        user?: {
            id?: string;
        };
    }): import("@prisma/client").Prisma.PrismaPromise<({
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
    swipe(req: {
        user?: {
            id?: string;
        };
    }, body: {
        userBId: string;
        liked: boolean;
        superLike?: boolean;
    }): Promise<{
        isMatch: boolean;
        match: {
            id: string;
            userA: {
                id: string;
                username: string;
                avatar: string | null;
            };
            userB: {
                id: string;
                username: string;
                avatar: string | null;
            };
        };
    } | {
        isMatch: boolean;
        match?: undefined;
    }>;
}
