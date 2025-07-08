"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProspectosModule = void 0;
const common_1 = require("@nestjs/common");
const prospectos_service_1 = require("./prospectos.service");
const prospectos_controller_1 = require("./prospectos.controller");
const prisma_service_1 = require("../prisma.service");
let ProspectosModule = class ProspectosModule {
};
exports.ProspectosModule = ProspectosModule;
exports.ProspectosModule = ProspectosModule = __decorate([
    (0, common_1.Module)({
        controllers: [prospectos_controller_1.ProspectosController],
        providers: [prospectos_service_1.ProspectosService, prisma_service_1.PrismaService],
    })
], ProspectosModule);
//# sourceMappingURL=prospectos.module.js.map