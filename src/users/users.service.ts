import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { SignUpDto } from 'src/auth/dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async createUserWithProfile(data: SignUpDto): Promise<User | null> {
    const {
      username,
      email,
      password,
      gender,
      bio,
      city,
      country,
      lat,
      lon,
      university,
      degree,
      major,
      //   avatar,
      interests,
      photos,
    } = data;

    return this.prisma.user.create({
      data: {
        username,
        email,
        passwordHash: password,
        profile: {
          create: {
            gender,
            bio,
            city,
            country,
            lat,
            lon,
            university,
            degree,
            major,
            // avatarPhotoId will be set after photo creation if needed
          },
        },
        interests: {
          create: interests?.map((interestId: string) => ({
            interest: { connect: { id: interestId } },
          })),
        },
        photos: {
          create: photos?.map((s3Key: string, idx: number) => ({
            s3Key,
            ordering: idx,
          })),
        },
      },
      include: {
        profile: true,
        interests: { include: { interest: true } },
        photos: true,
      },
    });
  }

  findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        profile: true,
        interests: { include: { interest: true } },
        photos: true,
      },
    });
  }
}
