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
exports.ChatsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ChatsService = class ChatsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findThreadsForUser(userId) {
        const threads = await this.prisma.chatThread.findMany({
            where: { OR: [{ participantAId: userId }, { participantBId: userId }] },
            include: {
                participantA: {
                    select: {
                        id: true,
                        username: true,
                        profile: { select: { avatarPhotoId: true } },
                    },
                },
                participantB: {
                    select: {
                        id: true,
                        username: true,
                        profile: { select: { avatarPhotoId: true } },
                    },
                },
                messages: { orderBy: { createdAt: 'desc' }, take: 1 },
            },
            orderBy: { lastMessageAt: 'desc' },
        });
        return threads.map((thread) => {
            const isA = thread.participantAId === userId;
            const otherUser = isA ? thread.participantB : thread.participantA;
            return {
                id: thread.id,
                lastMessage: thread.lastMessage,
                lastMessageAt: thread.lastMessageAt,
                unreadCount: isA ? thread.unreadCountA : thread.unreadCountB,
                otherUser: {
                    id: otherUser.id,
                    username: otherUser.username,
                    avatar: otherUser.profile?.avatarPhotoId ?? null,
                },
                lastMessageContent: thread.messages[0]?.content ?? null,
            };
        });
    }
    findMessages(threadId) {
        return this.prisma.message.findMany({ where: { threadId } });
    }
    async createMessage(dto) {
        let threadId = dto.threadId;
        if (!threadId && dto.matchId) {
            let thread = await this.prisma.chatThread.findUnique({
                where: { matchId: dto.matchId },
            });
            if (!thread) {
                const match = await this.prisma.match.findUnique({
                    where: { id: dto.matchId },
                });
                if (!match) {
                    throw new Error(`Match with id ${dto.matchId} not found`);
                }
                thread = await this.prisma.chatThread.create({
                    data: {
                        matchId: dto.matchId,
                        participantAId: match.userAId,
                        participantBId: match.userBId,
                    },
                });
            }
            threadId = thread.id;
        }
        if (!threadId) {
            throw new Error('threadId is required to create a message');
        }
        return this.prisma.message.create({
            data: {
                threadId,
                senderId: dto.senderId,
                content: dto.content,
            },
        });
    }
};
exports.ChatsService = ChatsService;
exports.ChatsService = ChatsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChatsService);
//# sourceMappingURL=chats.service.js.map