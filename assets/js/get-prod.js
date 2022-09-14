// import {criaLista} from './geraLista.js';

function fazGet(url) {
    let request = new XMLHttpRequest();
    request.open("GET",url , false);
    request.send();
    return request;
}

function criaLista(produto) {
    let preco = produto.preco;
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL' 
    });
    let valor = formatter.format(preco);
    let lista = document.createElement('li');
    lista.className ='bloco';
    let linha1 = document.createElement('p');
    let prodNome = document.createTextNode(`${produto.nome} - ${produto.categoria}`);
    linha1.appendChild(prodNome)
    linha1.className ='l1';
    let linha2 = document.createElement('p');
    let prodDesc = document.createTextNode(produto.descricao);
    linha2.appendChild(prodDesc)
    linha2.className ='l2';
    let linha3 = document.createElement('p');
    let prodPreco = document.createTextNode(valor);
    linha3.appendChild(prodPreco)
    linha3.className ='l3';

    lista.appendChild(linha1);
    lista.appendChild(linha2);
    lista.appendChild(linha3);

    return lista ;
}

function notFound(produtos) {
    if(produtos.length === 0) {
        let linha = document.createElement('p');
        let prodNotFound = document.createTextNode('Não há produtos cadastrados.');
        linha.appendChild(prodNotFound)
        linha.className ='messageNotFound';
        lista.appendChild(linha);
        lista.className ='bloco';
    }
}

function main() {
    let retorno = fazGet("http://localhost:3000/produtos");
    let produtos = retorno.responseText
    let lista = document.getElementById("lista");
    // console.log(retorno)
    // retorno.onload = function() {
    //     console.log(retorno.status);
    // }
    produtos = JSON.parse(produtos);
    produtos.forEach(element => {
        let prodLista = criaLista(element);
        lista.appendChild(prodLista);
    });
    notFound(produtos);
}


main()

module.exports = main;




