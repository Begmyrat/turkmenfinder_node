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
        interests: ({
            interest: {
                name: string;
                id: string;
            };
        } & {
            interestId: string;
            userId: string;
        })[];
        photos: {
            id: string;
            createdAt: Date;
            s3Key: string;
            ordering: number;
            userId: string;
        }[];
        profile: {
            gender: string | null;
            lat: number | null;
            lon: number | null;
            city: string | null;
            country: string | null;
            bio: string | null;
            university: string | null;
            degree: string | null;
            major: string | null;
            id: string;
            avatarPhotoId: string | null;
            userId: string;
        } | null;
    } & {
        email: string | null;
        username: string;
        id: string;
        passwordHash: string | null;
        isActive: boolean;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    })[]>;
}
