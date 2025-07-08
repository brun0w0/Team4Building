import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateProspectoDto } from './dto/create-prospecto.dto';
import { UpdateProspectoDto } from './dto/update-prospecto.dto';

@Injectable()
export class ProspectosService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateProspectoDto) {
    return this.prisma.prospectos.create({ data });
  }

  findAll() {
    return this.prisma.prospectos.findMany();
  }

  findOne(id: number) {
    return this.prisma.prospectos.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateProspectoDto) {
    const prospecto = await this.prisma.prospectos.findUnique({ where: { id } });
    if (!prospecto) throw new NotFoundException('Prospecto no encontrado');
    return this.prisma.prospectos.update({ where: { id }, data });
  }

  async remove(id: number) {
    const prospecto = await this.prisma.prospectos.findUnique({ where: { id } });
    if (!prospecto) throw new NotFoundException('Prospecto no encontrado');
    return this.prisma.prospectos.delete({ where: { id } });
  }
}
