import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() {
    this.itens = this.obtemCarrinho() || [];
  }

  obtemCarrinho(): IProdutoCarrinho[] {
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens
  }


  adicionarAoCarrinho(produto: IProdutoCarrinho): void {
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itens = this.itens.filter(item => item.id !== produtoId)
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho(): void {
    this.itens = [];
    localStorage.removeItem("carrinho");
  }
}
