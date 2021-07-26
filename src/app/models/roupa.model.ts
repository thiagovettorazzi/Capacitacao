import { Cor } from "./cor.model";

export interface Roupa {
    tamanho: Tamanho;
    cor: Cor;
    preco: Number;
}
  
export enum Tamanho {
    P,
    M,
    G
}