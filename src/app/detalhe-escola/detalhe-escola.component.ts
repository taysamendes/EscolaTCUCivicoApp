import { Component, OnInit } from '@angular/core';
import { EscolasService } from '../escolas/escola/escolas.service';
import { Escola } from '../escolas/escola/escola.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalhe-escola',
  templateUrl: './detalhe-escola.component.html',
  styleUrls: ['./detalhe-escola.component.css']
})
export class DetalheEscolaComponent implements OnInit {

  escola:Escola

  constructor(private escolasService:EscolasService, 
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.escolasService.escolaById(this.route.snapshot.params['id'])
      .subscribe(escola => this.escola = escola)
    
  }

}
