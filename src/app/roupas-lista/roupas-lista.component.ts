import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Roupa } from '../models/roupa.model';
import { delay } from 'rxjs/operators';
import { Cor } from '../models/cor.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'roupas-lista',
  templateUrl: './roupas-lista.component.html',
  styleUrls: ['./roupas-lista.component.css']
})
export class RoupasListaComponent implements OnInit {

  public cores: Cor[] = [
    { nome: "Amarelo",    hexa: "#f1c40f" },
    { nome: "Azul",       hexa: "#3498db" },
    { nome: "Verde",      hexa: "#27ae60" },
    { nome: "Vermelho",   hexa: "#c0392b" }
  ];
  public listaCompleta: Roupa[] = [];
  public listaExibicao: Roupa[] = [];
  public listaCoresPesquisa: string[] = [];

  public lista$: Observable<Roupa[]> = of([
    { tamanho: 0, cor: this.cores[1], preco: 45 },
    { tamanho: 2, cor: this.cores[2], preco: 15 },
    { tamanho: 1, cor: this.cores[2], preco: 84 },
    { tamanho: 1, cor: this.cores[3], preco: 155 },
    { tamanho: 1, cor: this.cores[2], preco: 53 },
    { tamanho: 2, cor: this.cores[3], preco: 30 },
    { tamanho: 0, cor: this.cores[1], preco: 70 },
    { tamanho: 2, cor: this.cores[2], preco: 27 },
    { tamanho: 0, cor: this.cores[3], preco: 62 },
    { tamanho: 2, cor: this.cores[0], preco: 41 }
  ]);//.pipe(delay(2000));
  
  public precoMinimo = new FormControl('');
  public precoMaximo = new FormControl('');
  public cor = new FormControl('');

  constructor() {}
  
  ngOnInit(): void {
    this.lista$.subscribe(listaRoupas => {
      this.listaCompleta = listaRoupas;
      this.listaExibicao = listaRoupas;
    });
  }
  
  public filtrar() {
    if (this.precoMinimo.value || this.precoMaximo.value || this.listaCoresPesquisa.length > 0) {
      this.listaExibicao = this.listaCompleta.filter(itemLista => itemLista.preco >= (this.precoMinimo.value ? this.precoMinimo.value : 0) && 
                                                                  itemLista.preco <= (this.precoMaximo.value ? this.precoMaximo.value : 1000000) &&
                                                                  this.listaCoresPesquisa.length > 0 ? this.listaCoresPesquisa.includes(itemLista.cor.hexa) : true);
    }
    else {
      this.listaExibicao = this.listaCompleta;
    }
  }

  public onChangeCor(event: any) {
    if (event.target.checked) {
      this.listaCoresPesquisa.push(event.target.value);
    }
    else {
      let index: number = this.listaCoresPesquisa.indexOf(event.target.value);
      
      if (index !== -1) {
        this.listaCoresPesquisa.splice(index, 1);
      }
    }
  }
}