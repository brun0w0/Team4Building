import { IsEmail, IsInt, IsOptional, IsString, IsUrl, Min } from 'class-validator';

export class CreateEmpresaDto {
  @IsInt()
  @Min(1)
  usuarioId!: number;

  @IsString()
  nombre!: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsUrl()
  logoUrl?: string;

  @IsOptional()
  @IsUrl()
  bannerUrl?: string;

  @IsOptional()
  @IsString()
  telefonoContacto?: string;

  @IsOptional()
  @IsEmail()
  correoContacto?: string;

  @IsOptional()
  @IsString()
  direccion?: string;

  @IsOptional()
  @IsString()
  redesSociales?: string;

  @IsOptional()
  @IsUrl()
  sitioWeb?: string;
}
