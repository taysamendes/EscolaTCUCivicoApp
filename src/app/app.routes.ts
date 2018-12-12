import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EscolasComponent } from './escolas/escolas.component';

export const ROUTES:Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'escolas', component:EscolasComponent}
]