import { InterestsService } from './interests.service';
import { CreateInterestDto, UpdateInterestDto } from './dto';
export declare class InterestsController {
    private readonly interestsService;
    constructor(interestsService: InterestsService);
    create(dto: CreateInterestDto): Promise<{
        name: string;
        id: string;
    }>;
    findAll(): Promise<{
        name: string;
        id: string;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        id: string;
    }>;
    update(id: string, dto: UpdateInterestDto): Promise<{
        name: string;
        id: string;
    }>;
    remove(id: string): Promise<{
        name: string;
        id: string;
    }>;
}
