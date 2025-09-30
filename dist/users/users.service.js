"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findByEmail(email) {
        return this.prisma.user.findUnique({
            where: { email },
        });
    }
    getProfile(userId) {
        return this.prisma.profile.findUnique({
            where: { userId },
        });
    }
    async createUserWithProfile(data) {
        const { username, email, password, gender, gender_looking_for, birthday, lat, lon, interests, photos, } = data;
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
                    create: interests?.map((interestId) => ({
                        interest: { connect: { id: interestId } },
                    })),
                },
                photos: {
                    create: photos?.map((s3Key, idx) => ({
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
    findById(id) {
        return this.prisma.user.findUnique({
            where: { id },
            include: {
                profile: true,
                interests: { include: { interest: true } },
                photos: true,
            },
        });
    }
    async discoverUsers({ userId, gender, page = 1, limit = 20, }) {
        const offset = (page - 1) * limit;
        return this.prisma.user.findMany({
            where: {
                id: { not: userId },
                isActive: true,
                profile: {
                    gender: gender,
                },
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
    async editUserProfile(userId, dto) {
        const { username, bio, gender, gender_looking_for, university, major, birthday, interests, photos, } = dto;
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
                        deleteMany: {},
                        create: interests.map((interestId) => ({
                            interest: { connect: { id: interestId } },
                        })),
                    }
                    : undefined,
                photos: photos
                    ? {
                        deleteMany: {},
                        create: photos.map((s3Key, idx) => ({
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
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map