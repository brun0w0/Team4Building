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
exports.ServiciosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ServiciosService = class ServiciosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(data) {
        return this.prisma.servicios.create({ data });
    }
    findAll() {
        return this.prisma.servicios.findMany();
    }
    findOne(id) {
        return this.prisma.servicios.findUnique({ where: { id } });
    }
    async update(id, data) {
        const servicio = await this.prisma.servicios.findUnique({ where: { id } });
        if (!servicio)
            throw new common_1.NotFoundException('Servicio no encontrado');
        return this.prisma.servicios.update({ where: { id }, data });
    }
    async remove(id) {
        const servicio = await this.prisma.servicios.findUnique({ where: { id } });
        if (!servicio)
            throw new common_1.NotFoundException('Servicio no encontrado');
        return this.prisma.servicios.delete({ where: { id } });
    }
};
exports.ServiciosService = ServiciosService;
exports.ServiciosService = ServiciosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ServiciosService);
//# sourceMappingURL=servicios.service.js.map