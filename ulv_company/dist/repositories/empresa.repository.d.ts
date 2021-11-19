import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Empresa, EmpresaRelations, Empleado } from '../models';
import { EmpleadoRepository } from './empleado.repository';
export declare class EmpresaRepository extends DefaultCrudRepository<Empresa, typeof Empresa.prototype.id, EmpresaRelations> {
    protected empleadoRepositoryGetter: Getter<EmpleadoRepository>;
    readonly empleados: HasManyRepositoryFactory<Empleado, typeof Empresa.prototype.id>;
    constructor(dataSource: MongoDbDataSource, empleadoRepositoryGetter: Getter<EmpleadoRepository>);
}
