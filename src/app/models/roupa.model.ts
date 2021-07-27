import { Cor } from "./cor.model";

export interface Roupa {
    id: number;
    tamanho: Tamanho;
    cor: Cor;
    preco: number;
    imagem: string;
    nome: string;
    estoque: number;
}
  
export enum Tamanho {
    P,
    M,
    G
}

export interface RoupaCarrinho {
    roupa: Roupa;
    qtd: number;
}