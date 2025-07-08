import { PrismaService } from '../prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
export declare class UsuariosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUsuarioDto): Promise<{
        id: number;
        email: string;
        password: string;
        creado_en: Date | null;
    }>;
    findByEmail(email: string): Promise<{
        id: number;
        email: string;
        password: string;
        creado_en: Date | null;
    } | null>;
}
