import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Profile, User } from '@prisma/client';
import { SignUpDto } from 'src/auth/dto';
import { EditProfileDto } from './dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  getProfile(userId: string): Promise<Profile | null> {
    return this.prisma.profile.findUnique({
      where: { userId },
    });
  }

  async createUserWithProfile(data: SignUpDto): Promise<User | null> {
    const {
      username,
      email,
      password,
      gender,
      gender_looking_for,
      birthday,
      lat,
      lon,
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
            gender_looking_for,
            birthday: birthday ? new Date(birthday) : null,
            lat,
            lon,
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
        settings: {
          create: {
            pushNotifications: true,
            newMatches: true,
            messages: true,
            superLikes: true,
            locationServices: true,
            showDistance: false,
            distanceFiltering: false,
            maxDistance: 50,
            ageRangeStart: 18,
            ageRangeEnd: 100,
            darkMode: false,
            discoverable: true,
            showOnline: true,
            language: 'en',
          },
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

  async discoverUsers({
    userId,
    gender,
    // lat,
    // lon,
    // radius = 50, // kilometers
    page = 1,
    limit = 20,
  }: {
    userId: string;
    gender: string;
    // lat: number;
    // lon: number;
    // radius: number;
    page?: number;
    limit?: number;
  }) {
    // Haversine formula for distance in SQL (PostgreSQL)
    // For production, consider PostGIS for true geospatial queries!
    // const earthRadiusKm = 6371;
    const offset = (page - 1) * limit;

    return this.prisma.user.findMany({
      where: {
        id: { not: userId },
        isActive: true,
        profile: {
          gender: gender,
          // lat: lat,
          // lon: lon,
        },
        // Add more filters as needed (e.g., exclude already swiped/matched users)
      },
      include: {
        profile: true,
        photos: true,
        interests: { include: { interest: true } },
      },
      skip: offset,
      take: limit,
      orderBy: { createdAt: 'desc' },
    });
  }

  async editUserProfile(
    userId: string,
    dto: EditProfileDto,
  ): Promise<User | null> {
    const {
      username,
      bio,
      gender,
      gender_looking_for,
      university,
      major,
      birthday,
      interests,
      photos,
    } = dto;

    return this.prisma.user.update({
      where: { id: userId },
      data: {
        username,
        profile: {
          update: {
            bio,
            gender,
            gender_looking_for,
            university,
            major,
            birthday: birthday ? new Date(birthday) : undefined,
          },
        },
        interests: interests
          ? {
              deleteMany: {}, // Clear existing interests
              create: interests.map((interestId: string) => ({
                interest: { connect: { id: interestId } },
              })),
            }
          : undefined,
        photos: photos
          ? {
              deleteMany: {}, // Clear existing photos
              create: photos.map((s3Key: string, idx: number) => ({
                s3Key,
                ordering: idx,
              })),
            }
          : undefined,
      },
      include: {
        profile: true,
        interests: { include: { interest: true } },
        photos: true,
      },
    });
  }
}
