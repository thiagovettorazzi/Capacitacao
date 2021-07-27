import { Component } from '@angular/core';
import { RoupaCarrinho } from './models/roupa.model';
import { RoupaDetalhesComponent } from './paginas/roupa-detalhes/roupa-detalhes.component';
import { carrinho } from './mocks/mocks';
import { CarrinhoComponent } from './paginas/carrinho/carrinho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loja de roupas';

  public carrinhoQtd: number = 0;
  
  public onActivate(component: Component): void {
    if (component instanceof CarrinhoComponent) {
      component.removerItemCarrinho.subscribe(atualizar => {
        if (atualizar) {
          this.atualizaQtdCarrinho();
        }
      });
    }

    this.atualizaQtdCarrinho();
  }

  public atualizaQtdCarrinho(): void {
    this.carrinhoQtd = carrinho.length;
  }

}
