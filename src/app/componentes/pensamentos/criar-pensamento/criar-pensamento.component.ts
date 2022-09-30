import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from 'src/app/interface/Pensamento';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  criarPensamento() {
    this.pensamentoService.criarPensamento(this.pensamento).subscribe(() => {
      this.router.navigate(['/listar-pensamento'])
    })
  }

  cancelar() {
    this.router.navigate(['/listar-pensamento'])
  }
}