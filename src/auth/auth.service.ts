import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }
    async login(user: any) {
        const payload = { sub: user.id, email: user.email }

        return {
            token: this.jwtService.sign(payload)
        }
    }
    async validateUser(email: string, password: string) {
        let user: any;
        try {
            user = await this.userService.findOneOrFail({ email });
        } catch (error) {
            return null
        }
        const isPasswordValid = compareSync(password, user.password);
        if (!isPasswordValid) return null;
        return user;
    }
}
