import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Empleado, EmpleadoRelations, Empresa } from '../models';
import { EmpresaRepository } from './empresa.repository';
export declare class EmpleadoRepository extends DefaultCrudRepository<Empleado, typeof Empleado.prototype.id, EmpleadoRelations> {
    protected empresaRepositoryGetter: Getter<EmpresaRepository>;
    readonly empresa: BelongsToAccessor<Empresa, typeof Empleado.prototype.id>;
    constructor(dataSource: MongoDbDataSource, empresaRepositoryGetter: Getter<EmpresaRepository>);
}
