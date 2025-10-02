import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from 'src/notifications/notifications.service';
export declare class MatchesService {
    private prisma;
    private notificationsService;
    constructor(prisma: PrismaService, notificationsService: NotificationsService);
    findMatchesForUser(userId: string): Promise<{
        id: string;
        createdAt: Date;
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
        user: {
            interests: {
                name: string;
                id: string;
            }[];
            email: string | null;
            username: string;
            profile: {
                gender: string | null;
                gender_looking_for: string | null;
                birthday: Date | null;
                lat: number | null;
                lon: number | null;
                city: string | null;
                country: string | null;
                bio: string | null;
                university: string | null;
                degree: string | null;
                major: string | null;
                id: string;
                userId: string;
                avatarPhotoId: string | null;
            } | null;
            id: string;
        };
    }[]>;
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
