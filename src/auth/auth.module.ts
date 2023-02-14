import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';


@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            privateKey: process.env.JWT_SECRET_KEY,
            signOptions: { expiresIn: 3600 },
        })
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],

})
export class AuthModule { }
