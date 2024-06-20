import { Component, OnInit } from '@angular/core';
import { TestService } from '../service/test.service';
import { Test } from '../model/test';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxPaginationModule],
})
export class RegistrarTestComponent implements OnInit {
  testForm: FormGroup;
  tiposTest = [];
  preguntas = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.testForm = this.fb.group({
      id_tipo_test: [''],
      respuestas: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.cargarTiposTest();
  }

  cargarTiposTest() {
    this.http.get('/api/tipo-test/v1/listar').subscribe((data: any) => {
      this.tiposTest = data.data;
    });
  }

  cargarPreguntas() {
    const idTipoTest = this.testForm.get('id_tipo_test').value;
    this.http.get(`/api/test/v1/preguntas/${idTipoTest}`).subscribe((data: any) => {
      this.preguntas = data;
      this.crearRespuestasFormArray();
    });
  }

  crearRespuestasFormArray() {
    const respuestasArray = this.testForm.get('respuestas') as FormArray;
    respuestasArray.clear();
    this.preguntas.forEach(() => {
      respuestasArray.push(new FormControl(''));
    });
  }

  registrarTest() {
    const formValue = this.testForm.value;
    const respuestas = this.testForm.value.respuestas.map((r, index) => ({
      pregunta: this.preguntas[index].pregunta,
      respuesta: r
    }));
    const data = {
      id_tipo_test: formValue.id_tipo_test,
      fecha_realizacion: new Date().toISOString().split('T')[0],
      respuestas: respuestas
    };

    this.http.post('/api/test/v1/agregar', data).subscribe(response => {
      console.log('Test registrado', response);
    });
  }
}