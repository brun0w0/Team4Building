import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcryptjs';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUsuarioDto) {
    const hash = await bcrypt.hash(data.password, 10);
    return this.prisma.usuarios.create({
      data: {
        email: data.email,
        password: hash,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.usuarios.findUnique({ where: { email } });
  }
}
