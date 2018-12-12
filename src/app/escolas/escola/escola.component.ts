import { Component, OnInit, Input } from '@angular/core';
import { Escola } from './escola.model';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.css']
})
export class EscolaComponent implements OnInit {

  @Input() escola: Escola

  constructor() { }

  ngOnInit() {
  }

}
