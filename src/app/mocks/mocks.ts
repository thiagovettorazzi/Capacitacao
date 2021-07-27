import { Roupa, RoupaCarrinho } from '../models/roupa.model';
import { Cor } from '../models/cor.model';

export const cores: Cor[] = [
    { nome: "Amarelo",    hexa: "#f1c40f" },
    { nome: "Azul",       hexa: "#3498db" },
    { nome: "Verde",      hexa: "#27ae60" },
    { nome: "Vermelho",   hexa: "#c0392b" }
];

export const roupas: Roupa[] = [
    { id:  1, tamanho: 0, cor: cores[1], preco:  45, estoque:  3, nome: "Calça", imagem: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/408c39301ebd471f955cacfc015c0564_9366/calca-adicolor-essentials-trefoil.jpg" },
    { id:  2, tamanho: 2, cor: cores[2], preco:  15, estoque: 13, nome: "Casaco", imagem: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7980befb298d498b98efad16012a008c_9366/itavic-l-ho-jkt.jpg" },
    { id:  3, tamanho: 1, cor: cores[2], preco:  84, estoque:  3, nome: "Camisa Flamengo", imagem: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/278a9bc9fc484506a16eab0a00c29063_9366/camisa-authentic-cr-flamengo-1.jpg"},
    { id:  4, tamanho: 1, cor: cores[3], preco: 155, estoque:  6, nome: "Bermuda", imagem: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1465c421c6f14308aedbad100174f2a2_9366/shorts-malha-colorblock-aeroready.jpg" },
    { id:  5, tamanho: 1, cor: cores[2], preco:  53, estoque:  2, nome: "Camisa Adidas", imagem: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c81d7740c5ad496a82c5ac460122c67c_9366/camiseta-adicolor-classics-trefoil.jpg" },
    { id:  6, tamanho: 2, cor: cores[3], preco:  30, estoque:  4, nome: "Camisa São Paulo", imagem: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a62a0e6ff9b942bd9872ad1601088bce_9366/camisa-1-sao-paulo-fc-21-22.jpg" },
    { id:  7, tamanho: 0, cor: cores[1], preco:  70, estoque:  3, nome: "Jaqueta São Paulo", imagem: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/710ec22c1fdb4972b437ad5201765bb2_9366/jaqueta-de-chuva-sao-paulo-fc.jpg" },
    { id:  8, tamanho: 2, cor: cores[2], preco:  27, estoque: 10, nome: "Agasalho esportivo", imagem: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ebf348b40c1449a490ebac4100ea7b89_9366/agasalho-primegreen-essentials-3-stripes.jpg" },
    { id:  9, tamanho: 0, cor: cores[3], preco:  62, estoque:  0, nome: "Shorts", imagem: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a9b7d3edfb8d44a98470a80900dfec38_9366/shorts-squadra-17.jpg" },
    { id: 10, tamanho: 2, cor: cores[0], preco:  41, estoque:  1, nome: "Moletom", imagem: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c2cb9a0be2fa4e0f965facf50105cd3d_9366/moletom-capuz-mike-genero-neutro.jpg" }
];

export const carrinho: RoupaCarrinho[] = [];