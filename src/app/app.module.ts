import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoupaComponent } from './components/roupa/roupa.component';
import { RoupasListaComponent } from './paginas/roupas-lista/roupas-lista.component';
import { RoupaDetalhesComponent } from './paginas/roupa-detalhes/roupa-detalhes.component';
import { CarrinhoComponent } from './paginas/carrinho/carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    RoupaComponent,
    RoupasListaComponent,
    RoupaDetalhesComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
