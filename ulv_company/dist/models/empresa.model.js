"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const empleado_model_1 = require("./empleado.model");
let Empresa = class Empresa extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Empresa.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Empresa.prototype, "Razon_Social", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Empresa.prototype, "NIT", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => empleado_model_1.Empleado),
    (0, tslib_1.__metadata)("design:type", Array)
], Empresa.prototype, "empleados", void 0);
Empresa = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Empresa);
exports.Empresa = Empresa;
//# sourceMappingURL=empresa.model.js.map