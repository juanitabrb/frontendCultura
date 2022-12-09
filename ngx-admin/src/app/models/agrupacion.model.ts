import { Evento } from "./evento.model";

export class Agrupacion{
    id?: number;
    nombre?: string;
    descripcion?: string;
    eventos?: Evento[];
}