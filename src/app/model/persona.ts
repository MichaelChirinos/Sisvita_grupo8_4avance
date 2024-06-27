export interface Persona {
  id_persona?: number;
  tipo_documento: string;
  documento: string;
  nombre: string;
  apellido_paterno : string;
  apellido_materno : string;
  telefono : string;
  fecha_nacimiento: Date;
}
