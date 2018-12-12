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
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EscolasComponent,
    AvaliacoesComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    EscolaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [EscolasService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
