import { Component, OnInit, Input} from '@angular/core';
import { Avaliacao } from './avaliacao.model';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit {
 
  @Input() avaliacao:Avaliacao
  constructor() { }

  ngOnInit() {
  }

}
