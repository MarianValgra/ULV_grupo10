import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Empresa} from './empresa.model';

@model()
export class Empleado extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  Telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  Direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  Email: string;

  @property({
    type: 'string',
    required: true,
  })
  Edad: string;

  @property({
    type: 'date',
    required: true,
  })
  Fecha_Nacimiento: string;

  @property({
    type: 'number',
    required: true,
  })
  Sueldo: number;

  @property({
    type: 'number',
    required: true,
  })
  Es_Directivo: number;

  @property({
    type: 'number',
    required: true,
  })
  Es_Cliente: number;

  @property({
    type: 'string',
    required: true,
  })
  Empresa_id: string;

  @belongsTo(() => Empresa)
  empresaId: string;

  constructor(data?: Partial<Empleado>) {
    super(data);
  }
}

export interface EmpleadoRelations {
  // describe navigational properties here
}

export type EmpleadoWithRelations = Empleado & EmpleadoRelations;
