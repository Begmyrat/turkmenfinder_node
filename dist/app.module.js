"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const profiles_module_1 = require("./profiles/profiles.module");
const user_photo_module_1 = require("./photos/user-photo.module");
const interests_module_1 = require("./interests/interests.module");
const matches_module_1 = require("./matches/matches.module");
const chats_module_1 = require("./chats/chats.module");
const notifications_module_1 = require("./notifications/notifications.module");
const agreements_module_1 = require("./agreements/agreements.module");
const uploads_module_1 = require("./uploads/uploads.module");
const prisma_module_1 = require("./prisma/prisma.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            profiles_module_1.ProfilesModule,
            user_photo_module_1.PhotosModule,
            interests_module_1.InterestsModule,
            matches_module_1.MatchesModule,
            chats_module_1.ChatsModule,
            notifications_module_1.NotificationsModule,
            agreements_module_1.AgreementsModule,
            uploads_module_1.UploadsModule,
            prisma_module_1.PrismaModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map