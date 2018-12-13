import { Component, OnInit } from '@angular/core';
import { Escola } from './escola/escola.model';
import { EscolasService } from './escola/escolas.service';


@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.css']
})
export class EscolasComponent implements OnInit {

  escolas: Escola[]

  constructor(private escolasService: EscolasService) { }

  ngOnInit() {
    this.escolasService.escolas()
      .subscribe(escolas =>this.escolas = escolas)
  }

}
