import { PrismaService } from '../prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
export declare class EmpresasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateEmpresaDto): import(".prisma/client").Prisma.Prisma__empresasClient<{
        id: number;
        creado_en: Date | null;
        nombre: string;
        descripcion: string | null;
        direccion: string | null;
        usuario_id: number;
        logo_url: string | null;
        banner_url: string | null;
        telefono_contacto: string | null;
        correo_contacto: string | null;
        redes_sociales: string | null;
        sitio_web: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        usuarios: {
            email: string;
            password: string;
            id: number;
            creado_en: Date | null;
        };
    } & {
        id: number;
        creado_en: Date | null;
        nombre: string;
        descripcion: string | null;
        direccion: string | null;
        usuario_id: number;
        logo_url: string | null;
        banner_url: string | null;
        telefono_contacto: string | null;
        correo_contacto: string | null;
        redes_sociales: string | null;
        sitio_web: string | null;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__empresasClient<{
        id: number;
        creado_en: Date | null;
        nombre: string;
        descripcion: string | null;
        direccion: string | null;
        usuario_id: number;
        logo_url: string | null;
        banner_url: string | null;
        telefono_contacto: string | null;
        correo_contacto: string | null;
        redes_sociales: string | null;
        sitio_web: string | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, data: UpdateEmpresaDto): Promise<{
        id: number;
        creado_en: Date | null;
        nombre: string;
        descripcion: string | null;
        direccion: string | null;
        usuario_id: number;
        logo_url: string | null;
        banner_url: string | null;
        telefono_contacto: string | null;
        correo_contacto: string | null;
        redes_sociales: string | null;
        sitio_web: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        creado_en: Date | null;
        nombre: string;
        descripcion: string | null;
        direccion: string | null;
        usuario_id: number;
        logo_url: string | null;
        banner_url: string | null;
        telefono_contacto: string | null;
        correo_contacto: string | null;
        redes_sociales: string | null;
        sitio_web: string | null;
    }>;
}
