import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadsService } from './uploads.service';
import { AuthGuard } from '@nestjs/passport';

const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1 MB

@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: Express.Multer.File) {
    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      throw new BadRequestException('File size should be less than 1 MB');
    }
    // Validate file type (image only)
    if (!file.mimetype.startsWith('image/')) {
      throw new BadRequestException('Only image files are allowed');
    }

    // You can get bucket/key from body or generate them here
    const bucket = process.env.MINIO_BUCKET || 'turkmenfinder-dev';
    const key = file.originalname;
    await this.uploadsService.uploadFile(bucket, key, file.buffer);
    return { key, url: `https://your-s3-endpoint/${bucket}/${key}` };
  }
}
