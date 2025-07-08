import { Estado } from '@prisma/client';
export declare class CreateProspectoDto {
    empresaId: number;
    nombre: string;
    correo?: string;
    telefono?: string;
    status?: Estado;
    comentarios?: string;
    integrantes?: number;
}
