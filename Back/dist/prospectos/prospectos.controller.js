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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProspectosController = void 0;
const common_1 = require("@nestjs/common");
const prospectos_service_1 = require("./prospectos.service");
const create_prospecto_dto_1 = require("./dto/create-prospecto.dto");
const update_prospecto_dto_1 = require("./dto/update-prospecto.dto");
let ProspectosController = class ProspectosController {
    constructor(prospectosService) {
        this.prospectosService = prospectosService;
    }
    create(createProspectoDto) {
        return this.prospectosService.create(createProspectoDto);
    }
    findAll() {
        return this.prospectosService.findAll();
    }
    findOne(id) {
        return this.prospectosService.findOne(+id);
    }
    update(id, updateProspectoDto) {
        return this.prospectosService.update(+id, updateProspectoDto);
    }
    remove(id) {
        return this.prospectosService.remove(+id);
    }
};
exports.ProspectosController = ProspectosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_prospecto_dto_1.CreateProspectoDto]),
    __metadata("design:returntype", void 0)
], ProspectosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProspectosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProspectosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_prospecto_dto_1.UpdateProspectoDto]),
    __metadata("design:returntype", void 0)
], ProspectosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProspectosController.prototype, "remove", null);
exports.ProspectosController = ProspectosController = __decorate([
    (0, common_1.Controller)('prospectos'),
    __metadata("design:paramtypes", [prospectos_service_1.ProspectosService])
], ProspectosController);
//# sourceMappingURL=prospectos.controller.js.map