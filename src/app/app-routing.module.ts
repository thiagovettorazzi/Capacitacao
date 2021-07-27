import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './paginas/carrinho/carrinho.component';
import { RoupaDetalhesComponent } from './paginas/roupa-detalhes/roupa-detalhes.component';
import { RoupasListaComponent } from './paginas/roupas-lista/roupas-lista.component';

const routes: Routes = [
  { path: "", redirectTo: "lista", pathMatch: "full" },
  { path: "lista", component: RoupasListaComponent },
  { path: "roupa/:id", component: RoupaDetalhesComponent },
  { path: "carrinho", component: CarrinhoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
