import { MatchesService } from './matches.service';
export declare class MatchesController {
    private readonly service;
    constructor(service: MatchesService);
    findMatches(req: {
        user?: {
            id?: string;
        };
    }): Promise<{
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
                id: string;
                name: string;
            }[];
            id: string;
            username: string;
            email: string | null;
            profile: {
                id: string;
                userId: string;
                avatarPhotoId: string | null;
                gender: string | null;
                gender_looking_for: string | null;
                bio: string | null;
                city: string | null;
                country: string | null;
                lat: number | null;
                lon: number | null;
                university: string | null;
                degree: string | null;
                major: string | null;
                birthday: Date | null;
            } | null;
        };
    }[]>;
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
