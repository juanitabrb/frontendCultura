import { Evento } from "./evento.model";

export class Usuario {
    id?: number;
    nombre?: string;
    correo?: string;
    contrasena?: string;
    id_rol?:number;
    token?: string;
    eventos?: Evento[];
}
