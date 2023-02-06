import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { MessagesUtils } from "src/utils/messages.utils";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({ usernameField: 'email' });
    }

    async validate(email: string, password: string) {
        console.log(email, password)
        const user = await this.authService.validateUser(email, password);
        console.log(user);
        if (!user)
            throw new UnauthorizedException(MessagesUtils.PASSWORD_OR_EMAIL_INVALID)

        return user;
    }
}