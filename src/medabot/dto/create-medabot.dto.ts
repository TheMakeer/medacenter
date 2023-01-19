import { IsNumber, IsObject, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreateMedabotDto {

    @IsNumber()
    @Min(1)
    @IsPositive()
    no:number;

    @IsString()
    @MinLength(1)
    name:string;

    @IsString()
    @MinLength(1)
    type: string; //Example: Metabee is a Beetle-type Medabot

    @IsString()
    @MinLength(1) // Example: Metabee's medal is a Kabuto Medal which speciality is shooting-type 
    medal:string; // medaparts and form which could be larva, pupa, a young adult on the ground, 
                  // adult flying and the beetle's form, it is represented by a letter B
    @IsString()
    @MinLength(1)
    model:string; // Example: Metabee's body is a KBT-Series and its model is a KBT-1

    @IsString()
    @MinLength(1)
    tinpet:string;


}
