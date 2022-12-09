import { Categoria } from "./categoria.model";
import { Programacion } from "./programacion.model";
import { Sitio } from "./sitio.model";

export class Evento{
    id?: number;
    nombre?: string;
    descripcion?: string;
    fecha?: Date;
    id_categoria?: number;
    id_sitio?: number;
    sitio?: Sitio;
    categoria?: Categoria;
    programacion?: Programacion;
}