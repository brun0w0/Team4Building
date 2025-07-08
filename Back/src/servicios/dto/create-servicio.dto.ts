import { IsInt, IsOptional, IsString, IsUrl, Min } from 'class-validator';

export class CreateServicioDto {
  @IsInt()
  @Min(1)
  empresaId!: number;

  @IsString()
  nombre!: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsUrl()
  imagenUrl?: string;
}
