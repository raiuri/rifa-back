import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { MessagesUtils } from "src/shared/constants/messages";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({ usernameField: 'email' });
    }

    async validate(email: string, password: string) {
        console.log('AUUUUUU', email);
        const user = await this.authService.validateUser(email, password);
        if (!user)
            throw new UnauthorizedException(MessagesUtils.PASSWORD_OR_EMAIL_INVALID)

        user.customData = "AUUUU AUUU AUU";
        return user;
    }
}