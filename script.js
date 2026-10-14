let categorias = [
    "Eletrônicos",
    "Vestuário",
    "Alimentos"
];

console.log("Questão 1.1:", categorias);

document.getElementById("q11").textContent =
    JSON.stringify(categorias, null, 2);

const codigosProdutos = [101, 102, 103, 104];

const fornecedores = new Array(
    "TechSupply",
    "ModaExpress",
    "SuperFoods"
);

console.log("Questão 1.2 - Códigos:", codigosProdutos);
console.log("Questão 1.2 - Fornecedores:", fornecedores);

document.getElementById("q12").textContent =
    `Códigos: ${JSON.stringify(codigosProdutos)}\n` +
    `Fornecedores: ${JSON.stringify(fornecedores)}`;


const primeiraCategoria = categorias[0];

categorias[1] = "Calçados";

console.log("Questão 1.3 - Primeiro elemento:", primeiraCategoria);
console.log("Questão 1.3 - Array atualizado:", categorias);

document.getElementById("q13").textContent =
    `Primeira categoria: ${primeiraCategoria}\n` +
    `Array atualizado: ${JSON.stringify(categorias)}`;


categorias.push("Livros");
const elementoRemovidoFinal = categorias.pop();

categorias.unshift("Brinquedos");
const elementoRemovidoInicial = categorias.shift();

console.log("Questão 2.1 - Elemento removido do final:",
    elementoRemovidoFinal);
console.log("Questão 2.1 - Elemento removido do início:",
    elementoRemovidoInicial);
console.log("Questão 2.1 - Array final:", categorias);

document.getElementById("q21").textContent =
    `Após push("Livros"): adiciona Livros.\n` +
    `Após pop(): remove ${elementoRemovidoFinal}.\n` +
    `Após unshift("Brinquedos"): adiciona Brinquedos.\n` +
    `Após shift(): remove ${elementoRemovidoInicial}.\n` +
    `Array final: ${JSON.stringify(categorias)}`;


console.log("Questão 2.2 - Tamanho:", categorias.length);

document.getElementById("q22").textContent =
    `categorias.length = ${categorias.length}`;


const indiceCalcados = categorias.indexOf("Calçados");
const possuiEletronicos = categorias.includes("Eletrônicos");

console.log("Questão 2.3 - Índice de Calçados:", indiceCalcados);
console.log("Questão 2.3 - Possui Eletrônicos:", possuiEletronicos);

document.getElementById("q23").textContent =
    `indexOf("Calçados"): ${indiceCalcados}\n` +
    `includes("Eletrônicos"): ${possuiEletronicos}`;


let resultadoFor = "";

for (let i = 0; i < categorias.length; i++) {
    console.log("Questão 3.1 - Categoria:", categorias[i]);
    resultadoFor += `${i}: ${categorias[i]}\n`;
}

document.getElementById("q31").textContent = resultadoFor;


let resultadoForOf = "";

for (const categoria of categorias) {
    console.log("Questão 3.2 - Categoria:", categoria);
    resultadoForOf += `${categoria}\n`;
}

document.getElementById("q32").textContent = resultadoForOf;



const produtos = [
    { nome: "Teclado Mecânico", preco: 250.00, estoque: 15 },
    { nome: "Mouse Gamer", preco: 120.00, estoque: 8 },
    { nome: "Monitor Ultrawide", preco: 1200.00, estoque: 4 }
];

const formatarMoeda = (valor) =>
    valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });


const primeiroProduto = produtos[0].nome;

console.log("Questão 4.1 - Primeiro produto:", primeiroProduto);

document.getElementById("q41").textContent = primeiroProduto;



const produtosBaratos = produtos.filter(
    produto => produto.preco < 300.00
);

const precos = [50, 150, 200, 350, 400];

const multiplosDeCem = precos.filter(
    preco => preco % 100 === 0
);

console.log("Questão 4.2 - Produtos baratos:", produtosBaratos);
console.log("Questão 4.2 - Múltiplos de 100:", multiplosDeCem);

document.getElementById("q42").textContent =
    `Produtos com preço menor que R$ 300,00:\n` +
    JSON.stringify(produtosBaratos, null, 2) +
    `\n\nPreços originais: ${JSON.stringify(precos)}` +
    `\nMúltiplos de 100: ${JSON.stringify(multiplosDeCem)}`;



const quantidades = [2, 3, 5, 10];

const totalItens = quantidades.reduce(
    (acumulador, quantidade) => acumulador + quantidade,
    0
);

const valorTotalEstoque = produtos.reduce(
    (acumulador, produto) =>
        acumulador + produto.preco * produto.estoque,
    0
);

console.log("Questão 4.3 - Total de itens:", totalItens);
console.log("Questão 4.3 - Valor do estoque:",
    formatarMoeda(valorTotalEstoque));

document.getElementById("q43").textContent =
    `Soma das quantidades: ${totalItens}\n` +
    `Valor imobilizado no estoque: ${formatarMoeda(valorTotalEstoque)}`;


const precosOriginais = [100, 200, 300];

const precosComDesconto = precosOriginais.map(
    preco => preco * 0.9
);

const nomesProdutos = produtos.map(
    produto => produto.nome
);

console.log("Questão 4.4 - Preços com 10% de desconto:",
    precosComDesconto);
console.log("Questão 4.4 - Nomes dos produtos:", nomesProdutos);

document.getElementById("q44").textContent =
    `Preços originais: ${JSON.stringify(precosOriginais)}\n` +
    `Preços com desconto: ${JSON.stringify(precosComDesconto)}\n` +
    `Nomes dos produtos: ${JSON.stringify(nomesProdutos, null, 2)}`;



const produtosOrdenados = produtos.slice();

produtosOrdenados.sort(
    (a, b) => a.preco - b.preco
);

console.log("Questão 4.5 - Produtos por preço crescente:",
    produtosOrdenados);

document.getElementById("q45").textContent =
    JSON.stringify(produtosOrdenados, null, 2);



const existeEstoqueCritico = produtos.some(
    produto => produto.estoque < 5
);

const inventario = [
    { nome: "Teclado", preco: 250.00, estoque: 15 },
    { nome: "Mouse", preco: 120.00, estoque: 2 },
    { nome: "Headset", preco: 180.00, estoque: 10 }
];

const existeCriticoInventario = inventario.some(
    produto => produto.estoque < 5
);

const primeiroCritico = inventario.find(
    produto => produto.estoque < 5
);

console.log("Questão 4.6 - Existe estoque crítico nos produtos?",
    existeEstoqueCritico);
console.log("Questão 4.6 - Existe estoque crítico no inventário?",
    existeCriticoInventario);
console.log("Questão 4.6 - Primeiro produto crítico:", primeiroCritico);

document.getElementById("q46").textContent =
    `Produtos principais — existe estoque abaixo de 5? ${existeEstoqueCritico}\n` +
    `Inventário alternativo — existe estoque crítico? ${existeCriticoInventario}\n` +
    `Primeiro produto crítico:\n${JSON.stringify(primeiroCritico, null, 2)}`;


document.getElementById("totalCategorias").textContent =
    categorias.length;

document.getElementById("totalProdutos").textContent =
    produtos.length;

document.getElementById("valorEstoque").textContent =
    formatarMoeda(valorTotalEstoque);


const tabelaProdutos = document.getElementById("tabelaProdutos");

produtos.forEach(produto => {
    const linha = document.createElement("tr");

    const situacao = produto.estoque < 5
        ? '<span class="status critico">Estoque crítico</span>'
        : '<span class="status normal">Normal</span>';

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${formatarMoeda(produto.preco)}</td>
        <td>${produto.estoque}</td>
        <td>${situacao}</td>
    `;

    tabelaProdutos.appendChild(linha);
});


const produtosCriticos = produtos.filter(
    produto => produto.estoque < 5
);

const alertaEstoque = document.getElementById("alertaEstoque");

if (produtosCriticos.length > 0) {
    const lista = document.createElement("ul");

    produtosCriticos.forEach(produto => {
        const item = document.createElement("li");
        item.textContent =
            `${produto.nome}: ${produto.estoque} unidades disponíveis.`;
        lista.appendChild(item);
    });

    alertaEstoque.replaceChildren();
    alertaEstoque.append(
        document.createTextNode("Atenção! Existem produtos com estoque baixo."),
        lista
    );
} else {
    alertaEstoque.textContent =
        "Todos os produtos possuem estoque igual ou superior a 5 unidades.";
}

console.log("Sistema de estoque carregado com sucesso!");