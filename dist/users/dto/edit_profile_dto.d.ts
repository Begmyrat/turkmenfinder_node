import { Gender } from 'src/auth/dto/sign-up-dto';
export declare class EditProfileDto {
    username?: string;
    bio?: string;
    gender?: Gender;
    gender_looking_for?: Gender;
    university?: string;
    major?: string;
    birthday?: string;
    interests?: string[];
    photos?: string[];
}
