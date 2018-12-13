import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avaliacao } from './avaliacao.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {
  private url = 'http://mobile-aceite.tcu.gov.br/nossaEscolaRS/rest/tiposavaliacao'

  constructor(private http:HttpClient) { }

  avaliacoes():Observable<Avaliacao[]>{
    return this.http.get<Avaliacao[]>(this.url)
      .pipe(map(response => response))
  }
}
