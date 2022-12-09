import { Agrupacion } from "./agrupacion.model";
import { Evento } from "./evento.model";

export class Contrato{
    id?: number;
    id_agrupacion?: number;
    id_evento?: number;
    agrupacion?: Agrupacion;
    evento?: Evento;
}