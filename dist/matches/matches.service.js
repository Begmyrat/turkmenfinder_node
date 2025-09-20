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
exports.MatchesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const notifications_service_1 = require("../notifications/notifications.service");
const client_1 = require("@prisma/client");
let MatchesService = class MatchesService {
    prisma;
    notificationsService;
    constructor(prisma, notificationsService) {
        this.prisma = prisma;
        this.notificationsService = notificationsService;
    }
    findMatchesForUser(userId) {
        return this.prisma.match.findMany({
            where: { OR: [{ userAId: userId }, { userBId: userId }] },
            include: { chatThread: true },
        });
    }
    async swipe(userAId, userBId, liked) {
        await this.prisma.swipe.upsert({
            where: { swiperId_swipedId: { swiperId: userAId, swipedId: userBId } },
            update: { liked },
            create: { swiperId: userAId, swipedId: userBId, liked },
        });
        const reciprocal = await this.prisma.swipe.findUnique({
            where: { swiperId_swipedId: { swiperId: userBId, swipedId: userAId } },
        });
        if (liked && reciprocal && reciprocal.liked) {
            const match = await this.prisma.match.create({
                data: { userAId, userBId },
            });
            await this.notificationsService.create({
                userId: userAId,
                type: client_1.NotificationType.MATCH,
                payload: { matchId: match.id, with: userBId },
            });
            await this.notificationsService.create({
                userId: userBId,
                type: client_1.NotificationType.MATCH,
                payload: { matchId: match.id, with: userAId },
            });
            return { match, isMatch: true };
        }
        return { isMatch: false };
    }
};
exports.MatchesService = MatchesService;
exports.MatchesService = MatchesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        notifications_service_1.NotificationsService])
], MatchesService);
//# sourceMappingURL=matches.service.js.map