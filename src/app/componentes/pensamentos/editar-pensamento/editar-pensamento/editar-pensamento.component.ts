import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from 'src/app/interface/Pensamento';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
}

constructor(
  private pensamentoService: PensamentoService,
  private router: Router,
  private route: ActivatedRoute
) { }

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id')
  this.pensamentoService.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
    this.pensamento = pensamento
  })
}

  editarPensamento(){
    this.pensamentoService.editarPensamento(this.pensamento).subscribe(() => {
      this.router.navigate(['/listar-pensamento'])
    })
  }

  cancelar() {
    this.router.navigate(['/listar-pensamento'])
  }

}
