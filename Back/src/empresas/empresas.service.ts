import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Injectable()
export class EmpresasService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateEmpresaDto) {
    return this.prisma.empresas.create({ data });
  }

  findAll() {
    return this.prisma.empresas.findMany({ include: { usuarios: true } });
  }

  findOne(id: number) {
    return this.prisma.empresas.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateEmpresaDto) {
    const empresa = await this.prisma.empresas.findUnique({ where: { id } });
    if (!empresa) throw new NotFoundException('Empresa no encontrada');

    return this.prisma.empresas.update({ where: { id }, data });
  }

  async remove(id: number) {
    const empresa = await this.prisma.empresas.findUnique({ where: { id } });
    if (!empresa) throw new NotFoundException('Empresa no encontrada');

    return this.prisma.empresas.delete({ where: { id } });
  }
}
