import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ESCOLA_API } from 'src/app/app.api';



@Injectable()
export class EscolasService {

  constructor(private http:HttpClient) { }

  escolas(){
    return this.http.get(`${ESCOLA_API}`)
  }
}
