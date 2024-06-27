import { Component, OnInit, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { TestService } from "../service/test.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Test } from "../model/test";
import { Tratamiento } from "../model/tratamiento";
import { Medida } from "../model/medida";
import { jwtDecode } from "jwt-decode";

@Component({
  selector: "app-confirmar-test",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./confirmar-test.component.html",
  styleUrls: ["./confirmar-test.component.css"],
})
export class ConfirmarTestComponent implements OnInit {
  test: any = {
    id_test: 0,
    id_tipo_test: 0,
    id_paciente: 0,
    id_rango_escala: 0,
    id_tratamiento: 0,
    id_medida: 0,
    fecha_realizacion: new Date(),
    respuestas: [],
    suma_respuestas: 0,
    confirmar: false,
    observacion: "",
  };
  id_test: number = 0;
  tratamientos: Tratamiento[] = [];
  medidas: Medida[] = [];
  id_especialista: number = 0;

  constructor(
    private testService: TestService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    if (this.isBrowser()) {
      this.setIdEspecialistaFromToken();
      this.route.params.subscribe((params) => {
        this.id_test = +params["id_test"]; // + para convertir a número
        console.log("ID Test:", this.id_test);
        console.log(this.id_especialista);
        this.cargarTest();
      });
      this.obtenerTratamientos();
      this.cargarMedidas();
    }
  }

  isBrowser(): boolean {
    return typeof window !== "undefined" && typeof localStorage !== "undefined";
  }
  cargarTest(): void {
    this.testService.obtenerDetalleTest(this.id_test).subscribe(
      (response) => {
        if (response.status === 200) {
          console.log(response.data); // Agrega esto para depurar
          this.test = response.data[0]; // Asigna el primer elemento si es un array
        }
      },
      (error) => {
        console.error("Error al cargar los tests:", error);
      }
    );
  }
  obtenerTratamientos() {
    this.http.get<any>("http://localhost:5000/tratamiento/v1/listar").subscribe(
      (response) => {
        this.tratamientos = response.data;
        console.log(this.tratamientos); // Verificar los datos en la consola
      },
      (error) => {
        console.error("Error al obtener tratamientos:", error);
      }
    );
  }
  setIdEspecialistaFromToken(): void {
    if (this.isBrowser()) {
      const token = localStorage.getItem("access_token");
      if (token) {
        const decodedToken: any = jwtDecode(token);
        this.id_especialista = decodedToken.id_especialista;
      } else {
        console.error("Token no encontrado");
      }
    }
  }

  cargarMedidas(): void {
    this.testService.obtenerMedidas(this.id_especialista).subscribe(
      (response) => {
        if (response.status === 200) {
          this.medidas = response.data;
        }
      },
      (error) => {
        console.error("Error al cargar las medidas:", error);
      }
    );
  }

  actualizarTest(): void {
    this.testService.actualizarTest(this.test).subscribe(
      (response) => {
        if (response.status === 202) {
          alert("Test actualizado correctamente");
        } else {
          alert("Error al actualizar el test");
        }
      },
      (error) => {
        console.error("Error al actualizar el test:", error);
      }
    );
  }

  ConfirmarTest(): void {
    this.test.confirmar = true;
    this.actualizarTest();
  }

  asignarTratamiento(id_tratamiento: number): void {
    this.test.id_tratamiento = id_tratamiento;
    this.actualizarTest();
  }

  agregarObservacion(observacion: string): void {
    this.test.observacion = observacion;
    this.actualizarTest();
  }
  asignarMedida(id_medida: number): void {
    this.test.id_medida = id_medida;
    this.actualizarTest();
  }
}
