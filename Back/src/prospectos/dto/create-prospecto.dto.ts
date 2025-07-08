import { IsEnum, IsOptional, IsString, IsEmail, IsInt, Min } from 'class-validator';
import { Estado } from '@prisma/client';

export class CreateProspectoDto {
  @IsInt()
  @Min(1)
  empresaId!: number;

  @IsString()
  nombre!: string;

  @IsOptional()
  @IsEmail()
  correo?: string;

  @IsOptional()
  @IsString()
  telefono?: string;

  @IsOptional()
  @IsEnum(Estado)
  status?: Estado;

  @IsOptional()
  @IsString()
  comentarios?: string;

  @IsOptional()
  @IsInt()
  integrantes?: number;
}
