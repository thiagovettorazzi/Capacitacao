import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';

import { Roupa } from '../models/roupa.model';
import { roupas, carrinho } from '../mocks/mocks';

@Injectable({
  providedIn: 'root'
})

export class RoupasService {
  constructor() { }

  public listarRoupas(): Observable<Roupa[]> {
    return new Observable(subscriber => {
      //setTimeout(() => {
        subscriber.next(roupas);
        subscriber.complete();
      //}, 2000);
    });
  }

  public buscarRoupa(id: number): Observable<Roupa> {
    return new Observable(subscriber => {
      //setTimeout(() => {
        subscriber.next(roupas.find(roupa => roupa.id == id));
        subscriber.complete();
      //}, 2000);
    });
  }
  
  public comprar(roupaAdicionar: Roupa): Observable<boolean> {
    let roupaCarrinhoIndex = carrinho.findIndex(roupaCarrinho => roupaCarrinho.roupa.id == roupaAdicionar.id);

    if (roupaCarrinhoIndex >= 0) {
      carrinho[roupaCarrinhoIndex].qtd += 1;
    }
    else {
      carrinho.push({
        roupa: roupaAdicionar,
        qtd: 1
      });
    }
    
    return new Observable(subscriber => {
      //setTimeout(() => {
        subscriber.next(true);
        subscriber.complete();
      //}, 2000);
    });
  }

}
