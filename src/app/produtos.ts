export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Mouse ergonômico com iluminação RGB", preco: 149.90, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-3.jpg", quantidadeEstoque: 15 },
    { id: 2, descricao: "Monitor Full HD 24 polegadas", preco: 999.99, descricaoPreco: "À vista no PIX", imagem: "./assets/monitor-1.jpg", quantidadeEstoque: 8 },
    { id: 3, descricao: "Teclado mecânico com switches azuis", preco: 349.90, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-1.jpg", quantidadeEstoque: 20 },
    { id: 4, descricao: "Fone com microfone ideal para FPS", preco: 449.50, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-2.jpg", quantidadeEstoque: 12 },
    { id: 5, descricao: "Fone Bluetooth intra-auricular", preco: 219.00, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-1.jpg", quantidadeEstoque: 18 },
    { id: 6, descricao: "Fone com espuma confortável e bom som", preco: 299.90, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-3.jpg", quantidadeEstoque: 10 },
    { id: 7, descricao: "HD externo 1TB USB 3.0", preco: 399.90, descricaoPreco: "À vista no PIX", imagem: "./assets/hd.jpg", quantidadeEstoque: 6 },
    { id: 8, descricao: "Combo RTX 4070 + suporte", preco: 4799.00, descricaoPreco: "À vista no PIX", imagem: "./assets/placa-video.jpg", quantidadeEstoque: 5 },
    { id: 9, descricao: "Processador AMD Ryzen 5 5600X", preco: 1149.99, descricaoPreco: "À vista no PIX", imagem: "./assets/processador.jpg", quantidadeEstoque: 9 },
    { id: 10, descricao: "Notebook 15.6'' com SSD e 8GB RAM", preco: 2899.99, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-1.jpg", quantidadeEstoque: 7 },
    { id: 11, descricao: "Notebook 17'' com 16GB RAM e i7", preco: 4999.99, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-2.jpg", quantidadeEstoque: 4 },
    { id: 12, descricao: "Mouse básico USB com boa precisão", preco: 39.90, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-1.png", quantidadeEstoque: 30 },
    { id: 13, descricao: "Mouse wireless com bateria durável", preco: 129.99, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-2.jpg", quantidadeEstoque: 20 },
    { id: 14, descricao: "Mouse compacto ideal para viagens", preco: 59.90, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-4.jpg", quantidadeEstoque: 14 },
    { id: 15, descricao: "Teclado padrão ABNT com teclas macias", preco: 119.90, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-2.jpg", quantidadeEstoque: 19 },
];
