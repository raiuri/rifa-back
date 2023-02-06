import { IsEmail, IsNotEmpty, Matches } from "class-validator";
import { MessagesUtils } from "src/utils/messages.utils";
import { RegExUtils } from "src/utils/regex.utils";

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
