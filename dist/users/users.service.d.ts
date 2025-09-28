import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { SignUpDto } from 'src/auth/dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<User | null>;
    createUserWithProfile(data: SignUpDto): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    discoverUsers({ currentUserId, gender, page, limit, }: {
        currentUserId: string;
        gender?: string;
        lat: number;
        lon: number;
        radius?: number;
        page?: number;
        limit?: number;
    }): Promise<({
        profile: {
            id: string;
            gender: string | null;
            bio: string | null;
            lat: number | null;
            lon: number | null;
            university: string | null;
            degree: string | null;
            major: string | null;
            gender_looking_for: string | null;
            city: string | null;
            country: string | null;
            birthday: Date | null;
            avatarPhotoId: string | null;
            userId: string;
        } | null;
        photos: {
            id: string;
            createdAt: Date;
            s3Key: string;
            ordering: number;
            userId: string;
        }[];
        interests: ({
            interest: {
                name: string;
                id: string;
            };
        } & {
            interestId: string;
            userId: string;
        })[];
    } & {
        id: string;
        username: string;
        email: string | null;
        passwordHash: string | null;
        isActive: boolean;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    })[]>;
}
