import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EmpresasModule } from './empresas/empresas.module';
import { ServiciosModule } from './servicios/servicios.module';
import { ProspectosModule } from './prospectos/prospectos.module';

@Module({
  imports: [
    AuthModule,
    UsuariosModule,
    EmpresasModule,
    ServiciosModule,
    ProspectosModule,
  ],
})
export class AppModule {}
