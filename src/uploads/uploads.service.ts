import { Injectable } from '@nestjs/common';
import { s3Client } from './s3.service';
import { PutObjectCommand } from '@aws-sdk/client-s3';

@Injectable()
export class UploadsService {
  async uploadFile(bucket: string, key: string, body: Buffer) {
    await s3Client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: body,
        ACL: 'public-read',
      }),
    );
    return { key };
  }
}
