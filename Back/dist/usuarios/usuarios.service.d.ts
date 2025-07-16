import { PrismaService } from '../prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
export declare class UsuariosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUsuarioDto): Promise<{
        email: string;
        password: string;
        id: number;
        creado_en: Date | null;
    }>;
    findByEmail(email: string): Promise<{
        email: string;
        password: string;
        id: number;
        creado_en: Date | null;
    } | null>;
}
