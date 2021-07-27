import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Roupa } from '../../models/roupa.model';
import { delay } from 'rxjs/operators';
import { Cor } from '../../models/cor.model';
import { FormControl } from '@angular/forms';
import { RoupasService } from '../../services/roupas.service';
import { cores } from '../../mocks/mocks';

@Component({
  selector: 'roupas-lista',
  templateUrl: './roupas-lista.component.html',
  styleUrls: ['./roupas-lista.component.css']
})
export class RoupasListaComponent implements OnInit {

  public cores: Cor[] = cores;
  public listaCompleta: Roupa[] = [];
  public listaExibicao: Roupa[] = [];
  public listaCoresPesquisa: string[] = [];

  public lista$: Observable<Roupa[]>;
  
  public precoMinimo = new FormControl('');
  public precoMaximo = new FormControl('');

  constructor(private roupasService: RoupasService) {}
  
  ngOnInit(): void {
    this.lista$ = this.roupasService.listarRoupas();

    this.lista$.subscribe(listaRoupas => {
      this.listaCompleta = listaRoupas;
      this.listaExibicao = listaRoupas;
    });
  }
  
  public filtrar() {
    if (this.precoMinimo.value || this.precoMaximo.value || this.listaCoresPesquisa.length > 0) {
      this.lista$.subscribe(listaRoupas => {
        this.listaExibicao = listaRoupas.filter(itemLista =>
          (itemLista.preco >= (this.precoMinimo.value ? this.precoMinimo.value : 0)) &&
          (itemLista.preco <= (this.precoMaximo.value ? this.precoMaximo.value : 1000000)) &&
          (this.listaCoresPesquisa.length > 0 ? this.listaCoresPesquisa.includes(itemLista.cor.hexa) : true)
        );
      });
    }
    else {
      this.lista$.subscribe(listaRoupas => this.listaExibicao = listaRoupas);
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