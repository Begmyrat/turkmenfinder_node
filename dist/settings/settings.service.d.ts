import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateSettingsDto } from './dto';
export declare class SettingsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getSettings(userId: string): Promise<{
        id: string;
        messages: boolean;
        userId: string;
        pushNotifications: boolean;
        newMatches: boolean;
        superLikes: boolean;
        locationServices: boolean;
        showDistance: boolean;
        distanceFiltering: boolean;
        maxDistance: number;
        ageRangeStart: number;
        ageRangeEnd: number;
        darkMode: boolean;
        discoverable: boolean;
        showOnline: boolean;
        language: string;
    }>;
    updateSettings(userId: string, dto: UpdateSettingsDto): Promise<{
        id: string;
        messages: boolean;
        userId: string;
        pushNotifications: boolean;
        newMatches: boolean;
        superLikes: boolean;
        locationServices: boolean;
        showDistance: boolean;
        distanceFiltering: boolean;
        maxDistance: number;
        ageRangeStart: number;
        ageRangeEnd: number;
        darkMode: boolean;
        discoverable: boolean;
        showOnline: boolean;
        language: string;
    }>;
}
