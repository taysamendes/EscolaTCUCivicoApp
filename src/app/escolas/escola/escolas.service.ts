import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Escola } from './escola.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable()
export class EscolasService {
  private url = 'http://mobile-aceite.tcu.gov.br/nossaEscolaRS/rest/escolas/'
  
  constructor(private http:HttpClient) { }

  escolas():Observable<Escola[]>{
    return this.http.get<Escola[]>(this.url)
      .pipe(map(response => response))
  }
}
