import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secretOrPrivateKey: 'secreteKEYYY',
            signOptions: {
                expiresIn: 3600,
            }
        })
    ],
    providers: [AuthService],
    exports: [PassportModule, AuthService],

})
export class AuthModule { }
