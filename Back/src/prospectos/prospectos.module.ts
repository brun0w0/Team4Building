import { Module } from '@nestjs/common';
import { ProspectosService } from './prospectos.service';
import { ProspectosController } from './prospectos.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ProspectosController],
  providers: [ProspectosService, PrismaService],
})
export class ProspectosModule {}
