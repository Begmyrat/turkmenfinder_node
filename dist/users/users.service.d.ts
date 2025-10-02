import { PrismaService } from 'src/prisma/prisma.service';
import { Profile, User } from '@prisma/client';
import { SignUpDto } from 'src/auth/dto';
import { EditProfileDto } from './dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<User | null>;
    getProfile(userId: string): Promise<Profile | null>;
    createUserWithProfile(data: SignUpDto): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    discoverUsers({ userId, gender, page, limit, }: {
        userId: string;
        gender: string;
        page?: number;
        limit?: number;
    }): Promise<({
        interests: ({
            interest: {
                name: string;
                id: string;
            };
        } & {
            userId: string;
            interestId: string;
        })[];
        photos: {
            id: string;
            createdAt: Date;
            userId: string;
            s3Key: string;
            ordering: number;
        }[];
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
    editUserProfile(userId: string, dto: EditProfileDto): Promise<User | null>;
}
