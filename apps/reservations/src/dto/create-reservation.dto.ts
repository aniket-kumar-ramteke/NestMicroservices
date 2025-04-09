import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateReservationDto {
    @IsDate()
    @Type(() => Date)
    start: Date;

    @IsDate()
    @Type(() => Date)
    end: Date;

    @IsString()
    @IsNotEmpty()
    placeId: string;

    @IsString()
    @IsNotEmpty()
    invoiceId: string;
}
