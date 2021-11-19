import { Entity } from '@loopback/repository';
import { Empleado } from './empleado.model';
export declare class Empresa extends Entity {
    id?: string;
    Razon_Social: string;
    NIT: string;
    empleados: Empleado[];
    constructor(data?: Partial<Empresa>);
}
export interface EmpresaRelations {
}
export declare type EmpresaWithRelations = Empresa & EmpresaRelations;
