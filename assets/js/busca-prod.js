function fazGetBusca(parametro) {
    let request = new XMLHttpRequest();
    const url = `http://localhost:3000/produtos/busca?nome=${parametro}`;
    request.open("GET",url, false);
    request.send();
    return request.responseText;
}

function criaLista(produto) {
    let preco = produto.preco;
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL' 
    });
    const valor = formatter.format(preco);
    let lista = document.createElement('li');
    lista.className ='bloco';
    let linha1 = document.createElement('p');
    const prodNome = document.createTextNode(`${produto.nome} - ${produto.categoria}`);
    linha1.appendChild(prodNome)
    linha1.className ='l1';
    let linha2 = document.createElement('p');
    const prodDesc = document.createTextNode(produto.descricao);
    linha2.appendChild(prodDesc)
    linha2.className ='l2';
    let linha3 = document.createElement('p');
    const prodPreco = document.createTextNode(valor);
    linha3.appendChild(prodPreco)
    linha3.className ='l3';

    lista.appendChild(linha1);
    lista.appendChild(linha2);
    lista.appendChild(linha3);

    return lista;
}

function busca() {
    const parametro = document.getElementById('busca').value;
    let lista = document.getElementById("lista");
    while( lista.firstChild ) {
        lista.removeChild( lista.firstChild );
      };
    console.log(parametro);
    let data = fazGetBusca(parametro);
    let produtos = JSON.parse(data);
    produtos.forEach(element => {
        let prodLista = criaLista(element);
        lista.appendChild(prodLista);
    });
}




