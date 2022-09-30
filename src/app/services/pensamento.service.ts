import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Pensamento } from '../interface/Pensamento';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root' 
})
export class PensamentoService {

  constructor(
    private http: HttpClient
  ) { }

  listarPensamento(): Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(environment.API_URL)
  }

  criarPensamento(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(environment.API_URL, pensamento)
  }
  
  editarPensamento(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.put<Pensamento>(`${environment.API_URL}/${pensamento.id}`, pensamento)
  }

  excluirPensamento(id: number): Observable<Pensamento> {
    return this.http.delete<Pensamento>(`${environment.API_URL}/${id}`)
  }

  buscarPorId(id: number): Observable<Pensamento> {
    return this.http.get<Pensamento>(`${environment.API_URL}/${id}`)
  }
  
}
