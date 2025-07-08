"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let EmpresasService = class EmpresasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(data) {
        return this.prisma.empresas.create({ data });
    }
    findAll() {
        return this.prisma.empresas.findMany({ include: { usuarios: true } });
    }
    findOne(id) {
        return this.prisma.empresas.findUnique({ where: { id } });
    }
    async update(id, data) {
        const empresa = await this.prisma.empresas.findUnique({ where: { id } });
        if (!empresa)
            throw new common_1.NotFoundException('Empresa no encontrada');
        return this.prisma.empresas.update({ where: { id }, data });
    }
    async remove(id) {
        const empresa = await this.prisma.empresas.findUnique({ where: { id } });
        if (!empresa)
            throw new common_1.NotFoundException('Empresa no encontrada');
        return this.prisma.empresas.delete({ where: { id } });
    }
};
exports.EmpresasService = EmpresasService;
exports.EmpresasService = EmpresasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmpresasService);
//# sourceMappingURL=empresas.service.js.map