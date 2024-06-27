import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PreguntaService } from "../service/pregunta.service";
import { CommonModule } from "@angular/common";
import { Pregunta } from "../model/pregunta";
import { Medida } from "../model/medida";
import { Alternativa } from "../model/alternativa";
import { AlternativaService } from "../service/alternativa.service";
import { Test } from "../model/test";
import { TestService } from "../service/test.service";
import { forkJoin } from "rxjs";
import { jwtDecode } from "jwt-decode";

@Component({
  selector: "app-detalle-tipo-test",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./detalle-tipo-test.component.html",
  styleUrl: "./detalle-tipo-test.component.css",
})
export class DetalleTipoTestComponent implements OnInit {
  id_tipo_test: number = 0;
  preguntas: Pregunta[] = [];
  alternativas: Alternativa[] = [];
  respuestas: { [key: number]: number } = {};
  id_paciente: number = 0;
  id_especialista: number = 0;
  test: Test | null = null;

  constructor(
    private route: ActivatedRoute,
    private preguntaService: PreguntaService,
    private alternativaService: AlternativaService,
    private testService: TestService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idTipoTestParam = params.get("id_tipo_test");
      if (idTipoTestParam !== null) {
        this.id_tipo_test = +idTipoTestParam;
        this.cargarPreguntasYAlternativas();
        this.cargarDetalleTest();
      }
    });

    this.setIdFromToken();
  }

  cargarPreguntasYAlternativas(): void {
    this.preguntaService
      .listarPreguntas(this.id_tipo_test)
      .subscribe((response) => {
        if (response.status === 200) {
          this.preguntas = response.data;
        }
      });

    this.alternativaService
      .listarAlternativas(this.id_tipo_test)
      .subscribe((response) => {
        if (response.status === 200) {
          this.alternativas = response.data;
        }
      });
  }

  cargarDetalleTest(): void {
    this.testService
      .obtenerDetalleTest(this.id_tipo_test)
      .subscribe((response) => {
        if (response.status === 200) {
          this.test = response.data;
        }
      });
  }

  seleccionarRespuesta(idPregunta: number, puntaje: number): void {
    this.respuestas[idPregunta] = puntaje;
  }

  calcularSumaRespuestas(): number {
    return this.preguntas.reduce((suma, pregunta) => {
      return suma + (this.respuestas[pregunta.id_pregunta!] || 0);
    }, 0);
  }

  guardarRespuestas(): void {
    const respuestasArray = this.preguntas.map(
      (p) => this.respuestas[p.id_pregunta!] || 0
    );
    const suma_respuestas = this.calcularSumaRespuestas();

    const nuevoTest: Test = {
      id_tipo_test: this.id_tipo_test,
      id_paciente: this.id_paciente,
      id_rango_escala: 0, // Este campo se calculará en el backend
      fecha_realizacion: new Date(),
      respuestas: respuestasArray,
      suma_respuestas: suma_respuestas,
      id_tratamiento: null,
      id_medida: null, // Inicializar como null
      observacion: null, // Inicializar como null
      confirmar: false, // Inicializar como false
    };

    this.testService.guardarTest(nuevoTest).subscribe((response) => {
      if (response.status === 200 || response.status === 201) {
        alert(
          `Respuestas guardadas con éxito. Suma de respuestas: ${suma_respuestas}`
        );
      } else {
        alert("Error al guardar las respuestas");
      }
    });
  }

  setIdFromToken(): void {
    const token = localStorage.getItem("access_token");
    if (token) {
      const decodedToken: any = jwtDecode(token);
      this.id_paciente = decodedToken.id_paciente || 0;
      this.id_especialista = decodedToken.id_especialista || 0;
    } else {
      console.error("Token no encontrado");
    }
  }
}
