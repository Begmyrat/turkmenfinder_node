"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3Client = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
exports.s3Client = new client_s3_1.S3Client({
    region: 'us-east-1',
    endpoint: process.env.MINIO_ENDPOINT || 'http://localhost:9000',
    forcePathStyle: true,
    credentials: {
        accessKeyId: process.env.MINIO_ACCESS_KEY || 'minioadmin',
        secretAccessKey: process.env.MINIO_SECRET_KEY || 'minioadmin',
    },
});
//# sourceMappingURL=s3.service.js.map