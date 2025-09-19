export declare class UploadsService {
    uploadFile(bucket: string, key: string, body: Buffer): Promise<{
        key: string;
    }>;
}
