export interface Test {
  id_test?: number;
  id_tipo_test: number;
  id_paciente: number;
  id_rango_escala: number;
  id_tratamiento: number | null;
  id_medida: number | null;
  fecha_realizacion: Date;
  respuestas: number[];
  suma_respuestas: number;
  confirmar: boolean;
  observacion: string | null;
}
