export declare enum Gender {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other"
}
export declare class SignUpDto {
    username: string;
    email: string;
    password: string;
    avatar?: string;
    gender: Gender;
    lat: number;
    lon: number;
    city: string;
    country: string;
    interests: string[];
    photos: string[];
    bio?: string;
    university?: string;
    degree?: string;
    major?: string;
}
