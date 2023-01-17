import { PartialType } from '@nestjs/mapped-types';
import { CreateMedabotDto } from './create-medabot.dto';

export class UpdateMedabotDto extends PartialType(CreateMedabotDto) {
    
    

}
