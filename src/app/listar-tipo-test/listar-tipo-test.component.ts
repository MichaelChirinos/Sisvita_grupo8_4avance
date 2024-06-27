import { Component, OnInit } from "@angular/core";
import { TipoTestService } from "../service/tipo-test.service";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-listar-tipo-test",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./listar-tipo-test.component.html",
  styleUrl: "./listar-tipo-test.component.css",
})
export class ListarTipoTestComponent implements OnInit {
  tiposTest: any[] = [];

  constructor(private tipoTestService: TipoTestService) {}

  ngOnInit(): void {
    this.tipoTestService.listarTiposTest().subscribe((response) => {
      if (response.status === 200) {
        this.tiposTest = response.data;
      }
    });
  }
}
