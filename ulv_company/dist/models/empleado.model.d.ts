import { Entity } from '@loopback/repository';
export declare class Empleado extends Entity {
    id?: string;
    Nombre: string;
    Apellidos: string;
    Telefono: string;
    Direccion: string;
    Email: string;
    Edad: string;
    Fecha_Nacimiento: string;
    Sueldo: number;
    Es_Directivo: number;
    Es_Cliente: number;
    Empresa_id: string;
    empresaId: string;
    constructor(data?: Partial<Empleado>);
}
export interface EmpleadoRelations {
}
export declare type EmpleadoWithRelations = Empleado & EmpleadoRelations;
