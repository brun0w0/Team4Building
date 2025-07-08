// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuariosModule } from '../usuarios/usuarios.module'; // 👈 IMPORTANTE
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
imports: [
    UsuariosModule, // 👈 Asegúrate de que esto esté incluido
    JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '1d' },
    }),
],
controllers: [AuthController],
providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
