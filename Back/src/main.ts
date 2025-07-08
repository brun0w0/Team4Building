import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
const app = await NestFactory.create(AppModule);

app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    }),
);

const config = new DocumentBuilder()
    .setTitle('Team Building API')
    .setDescription('API para gestionar usuarios, empresas, servicios y prospectos')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('docs', app, document);

await app.listen(3000);
console.log(`Tu servidor corriendo en http://localhost:3000`);
}
bootstrap();
