import { SettingsService } from './settings.service';
import { UpdateSettingsDto } from './dto';
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    getSettings(req: {
        user?: {
            id?: string;
        };
    }): Promise<{
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
    updateSettings(req: {
        user?: {
            id?: string;
        };
    }, dto: UpdateSettingsDto): Promise<{
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
