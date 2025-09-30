import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from 'src/notifications/notifications.service';
export declare class MatchesService {
    private prisma;
    private notificationsService;
    constructor(prisma: PrismaService, notificationsService: NotificationsService);
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
        userAId: string;
        userBId: string;
        createdAt: Date;
    })[]>;
    swipe(userAId: string, userBId: string, liked: boolean, superLike?: boolean): Promise<{
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
