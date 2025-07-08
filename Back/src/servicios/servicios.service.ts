import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';

@Injectable()
export class ServiciosService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateServicioDto) {
    return this.prisma.servicios.create({ data });
  }

  findAll() {
    return this.prisma.servicios.findMany();
  }

  findOne(id: number) {
    return this.prisma.servicios.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateServicioDto) {
    const servicio = await this.prisma.servicios.findUnique({ where: { id } });
    if (!servicio) throw new NotFoundException('Servicio no encontrado');
    return this.prisma.servicios.update({ where: { id }, data });
  }

  async remove(id: number) {
    const servicio = await this.prisma.servicios.findUnique({ where: { id } });
    if (!servicio) throw new NotFoundException('Servicio no encontrado');
    return this.prisma.servicios.delete({ where: { id } });
  }
}
