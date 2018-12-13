import { Component, OnInit } from '@angular/core';
import { Avaliacao } from './avaliacao/avaliacao.model';
import { AvaliacaoService } from './avaliacao/avaliacao.service';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.css']
})
export class AvaliacoesComponent implements OnInit {

  avaliacoes:Avaliacao[]

  constructor(private avaliacaoService:AvaliacaoService) { }

  ngOnInit() {
    this.avaliacaoService.avaliacoes()
      .subscribe(avaliacoes => this.avaliacoes = avaliacoes)
  }

}
