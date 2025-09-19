import { InterestsService } from './interests.service';
import { CreateInterestDto, UpdateInterestDto } from './dto';
export declare class InterestsController {
    private readonly interestsService;
    constructor(interestsService: InterestsService);
    create(dto: CreateInterestDto): Promise<{
        id: string;
        name: string;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
    }>;
    update(id: string, dto: UpdateInterestDto): Promise<{
        id: string;
        name: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
    }>;
}
