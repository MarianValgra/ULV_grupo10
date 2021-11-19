"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EmpresaControllerController = class EmpresaControllerController {
    constructor(empresaRepository) {
        this.empresaRepository = empresaRepository;
    }
    async create(empresa) {
        return this.empresaRepository.create(empresa);
    }
    async count(where) {
        return this.empresaRepository.count(where);
    }
    async find(filter) {
        return this.empresaRepository.find(filter);
    }
    async updateAll(empresa, where) {
        return this.empresaRepository.updateAll(empresa, where);
    }
    async findById(id, filter) {
        return this.empresaRepository.findById(id, filter);
    }
    async updateById(id, empresa) {
        await this.empresaRepository.updateById(id, empresa);
    }
    async replaceById(id, empresa) {
        await this.empresaRepository.replaceById(id, empresa);
    }
    async deleteById(id) {
        await this.empresaRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/empresas'),
    (0, rest_1.response)(200, {
        description: 'Empresa model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Empresa) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empresa, {
                    title: 'NewEmpresa',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpresaControllerController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/empresas/count'),
    (0, rest_1.response)(200, {
        description: 'Empresa model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Empresa)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpresaControllerController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/empresas'),
    (0, rest_1.response)(200, {
        description: 'Array of Empresa model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Empresa, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Empresa)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpresaControllerController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/empresas'),
    (0, rest_1.response)(200, {
        description: 'Empresa PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empresa, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Empresa)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Empresa, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpresaControllerController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/empresas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Empresa model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empresa, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Empresa, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpresaControllerController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/empresas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Empresa PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empresa, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Empresa]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpresaControllerController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/empresas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Empresa PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Empresa]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpresaControllerController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/empresas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Empresa DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpresaControllerController.prototype, "deleteById", null);
EmpresaControllerController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.EmpresaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.EmpresaRepository])
], EmpresaControllerController);
exports.EmpresaControllerController = EmpresaControllerController;
//# sourceMappingURL=empresa-controller.controller.js.map