import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { SignUpDto } from 'src/auth/dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<User | null>;
    createUserWithProfile(data: SignUpDto): Promise<User | null>;
    findById(id: string): Promise<User | null>;
}
