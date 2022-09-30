import { Component, OnInit } from '@angular/core';
import { Pensamento } from 'src/app/interface/Pensamento';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = []

  constructor(
    private pensamentoService: PensamentoService
  ) { }

  ngOnInit() {
    this.listarPensamentos()
  }
  
  listarPensamentos() {
    this.pensamentoService.listarPensamento().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }
}
