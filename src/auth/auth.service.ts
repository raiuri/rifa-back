import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly jwtSevice: JwtService) { }

    async createToken(username: string) {
        const payload = { username };
        return {
            access_token: this.jwtSevice.sign(payload),
        };
    }

    async validateUser(payload: any) {
        // logica para validar o usuario
        return payload;
    }
}
