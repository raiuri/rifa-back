import { IsEmail, IsNotEmpty, Matches } from "class-validator";
import { MessagesUtils } from "src/shared/constants/messages";
import { RegExUtils } from "src/shared/constants/regex";

export class CreateUserDto {
    @IsNotEmpty()
    firstName?: string;
    @IsNotEmpty()
    lastName?: string;
    @IsNotEmpty()
    @IsEmail()
    email?: string;
    @IsNotEmpty()
    @Matches(RegExUtils.password, { message: MessagesUtils.PASSWORD_VALID })
    password: string;
}
