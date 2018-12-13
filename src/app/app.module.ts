import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscolasComponent } from './escolas/escolas.component';
import { AvaliacoesComponent } from './avaliacoes/avaliacoes.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {ROUTES} from './app.routes'
import { RouterModule } from '@angular/router';
import { EscolaComponent } from './escolas/escola/escola.component';
import { EscolasService } from './escolas/escola/escolas.service';
import { HttpClientModule } from '@angular/common/http';
import { AvaliacaoComponent } from './avaliacoes/avaliacao/avaliacao.component';

@NgModule({
  declarations: [
    AppComponent,
    EscolasComponent,
    AvaliacoesComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    EscolaComponent,
    AvaliacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [EscolasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
