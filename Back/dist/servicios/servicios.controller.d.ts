import { ServiciosService } from './servicios.service';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
export declare class ServiciosController {
    private readonly serviciosService;
    constructor(serviciosService: ServiciosService);
    create(createServicioDto: CreateServicioDto): import(".prisma/client").Prisma.Prisma__serviciosClient<{
        id: number;
        empresa_id: number;
        nombre: string;
        descripcion: string | null;
        imagen_url: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        empresa_id: number;
        nombre: string;
        descripcion: string | null;
        imagen_url: string | null;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__serviciosClient<{
        id: number;
        empresa_id: number;
        nombre: string;
        descripcion: string | null;
        imagen_url: string | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateServicioDto: UpdateServicioDto): Promise<{
        id: number;
        empresa_id: number;
        nombre: string;
        descripcion: string | null;
        imagen_url: string | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        empresa_id: number;
        nombre: string;
        descripcion: string | null;
        imagen_url: string | null;
    }>;
}
