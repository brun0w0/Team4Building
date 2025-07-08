"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProspectoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_prospecto_dto_1 = require("./create-prospecto.dto");
class UpdateProspectoDto extends (0, mapped_types_1.PartialType)(create_prospecto_dto_1.CreateProspectoDto) {
}
exports.UpdateProspectoDto = UpdateProspectoDto;
//# sourceMappingURL=update-prospecto.dto.js.map