import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString, MinLength } from "class-validator";

export class TareaDto{

    
    readonly id:string;
    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @ApiProperty()
    readonly message:string;
    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty()
    readonly isDone:boolean;
}