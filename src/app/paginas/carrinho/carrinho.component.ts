import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Roupa, RoupaCarrinho } from '../../models/roupa.model';
import { carrinho } from '../../mocks/mocks';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
    public carrinhoRoupas: RoupaCarrinho[];
    
    @Output() removerItemCarrinho = new EventEmitter<boolean>();

    constructor() { }
    
    ngOnInit(): void {
        this.atualizarVisualizacaoProdutos();
    }

    public atualizarVisualizacaoProdutos(): void {
        this.carrinhoRoupas = carrinho;
    }
    
    public remover(roupa: Roupa): void {
        let indexExclusao = carrinho.findIndex(item => item.roupa.id == roupa.id);
        carrinho.splice(indexExclusao, 1);
        
        this.atualizarVisualizacaoProdutos();
        
        this.removerItemCarrinho.emit(true);
    }

    public removerTudo(): void {
        carrinho.splice(0);
        this.atualizarVisualizacaoProdutos();
        
        this.removerItemCarrinho.emit(true);
    }
    
}
