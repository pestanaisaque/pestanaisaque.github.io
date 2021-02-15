import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { FaleConoscoComponent } from './components/faleconosco/faleconosco.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { SobreNosComponent } from './components/sobrenos/sobrenos.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'servicos',         component: ServicosComponent },
    { path: 'faleconosco',      component: FaleConoscoComponent },
    { path: 'sobrenos',      component: SobreNosComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
