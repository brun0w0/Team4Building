import { EmpresasService } from './empresas.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
export declare class EmpresasController {
    private readonly empresasService;
    constructor(empresasService: EmpresasService);
    create(createEmpresaDto: CreateEmpresaDto): import(".prisma/client").Prisma.Prisma__empresasClient<{
        id: number;
        usuario_id: number;
        nombre: string;
        descripcion: string | null;
        logo_url: string | null;
        banner_url: string | null;
        telefono_contacto: string | null;
        correo_contacto: string | null;
        direccion: string | null;
        redes_sociales: string | null;
        sitio_web: string | null;
        creado_en: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        usuarios: {
            id: number;
            creado_en: Date | null;
            email: string;
            password: string;
        };
    } & {
        id: number;
        usuario_id: number;
        nombre: string;
        descripcion: string | null;
        logo_url: string | null;
        banner_url: string | null;
        telefono_contacto: string | null;
        correo_contacto: string | null;
        direccion: string | null;
        redes_sociales: string | null;
        sitio_web: string | null;
        creado_en: Date | null;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__empresasClient<{
        id: number;
        usuario_id: number;
        nombre: string;
        descripcion: string | null;
        logo_url: string | null;
        banner_url: string | null;
        telefono_contacto: string | null;
        correo_contacto: string | null;
        direccion: string | null;
        redes_sociales: string | null;
        sitio_web: string | null;
        creado_en: Date | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateEmpresaDto: UpdateEmpresaDto): Promise<{
        id: number;
        usuario_id: number;
        nombre: string;
        descripcion: string | null;
        logo_url: string | null;
        banner_url: string | null;
        telefono_contacto: string | null;
        correo_contacto: string | null;
        direccion: string | null;
        redes_sociales: string | null;
        sitio_web: string | null;
        creado_en: Date | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        usuario_id: number;
        nombre: string;
        descripcion: string | null;
        logo_url: string | null;
        banner_url: string | null;
        telefono_contacto: string | null;
        correo_contacto: string | null;
        direccion: string | null;
        redes_sociales: string | null;
        sitio_web: string | null;
        creado_en: Date | null;
    }>;
}
