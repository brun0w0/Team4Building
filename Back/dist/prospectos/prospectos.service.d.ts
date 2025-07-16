import { PrismaService } from '../prisma.service';
import { CreateProspectoDto } from './dto/create-prospecto.dto';
import { UpdateProspectoDto } from './dto/update-prospecto.dto';
export declare class ProspectosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateProspectoDto): import(".prisma/client").Prisma.Prisma__prospectosClient<{
        id: number;
        creado_en: Date | null;
        nombre: string;
        empresa_id: number;
        correo: string | null;
        telefono: string | null;
        status: import(".prisma/client").$Enums.prospectos_status | null;
        comentarios: string | null;
        integrantes: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        creado_en: Date | null;
        nombre: string;
        empresa_id: number;
        correo: string | null;
        telefono: string | null;
        status: import(".prisma/client").$Enums.prospectos_status | null;
        comentarios: string | null;
        integrantes: number | null;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__prospectosClient<{
        id: number;
        creado_en: Date | null;
        nombre: string;
        empresa_id: number;
        correo: string | null;
        telefono: string | null;
        status: import(".prisma/client").$Enums.prospectos_status | null;
        comentarios: string | null;
        integrantes: number | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, data: UpdateProspectoDto): Promise<{
        id: number;
        creado_en: Date | null;
        nombre: string;
        empresa_id: number;
        correo: string | null;
        telefono: string | null;
        status: import(".prisma/client").$Enums.prospectos_status | null;
        comentarios: string | null;
        integrantes: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        creado_en: Date | null;
        nombre: string;
        empresa_id: number;
        correo: string | null;
        telefono: string | null;
        status: import(".prisma/client").$Enums.prospectos_status | null;
        comentarios: string | null;
        integrantes: number | null;
    }>;
}
