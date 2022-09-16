function fazGetBusca(parametro) {
    let request = new XMLHttpRequest();
    const url = `http://localhost:3000/produtos/busca?nome=${parametro}`;
    request.open("GET",url, false);
    request.send();
    return request.responseText;
}

function botaoLimpa(botao) {
    botao.textContent ='limpar';
    // botao.type = 'reset';
} 

function botaoEnvia(botao) {
    botao.textContent = 'enviar';
    // botao.type = 'submit';
}

function limpaTela(botao) {
    document.getElementById('busca').value = "";
    botaoEnvia(botao);
    while( lista.firstChild ) {
        lista.removeChild( lista.firstChild );
    };
    pegaProd();
    return;
}

function buscaProd() {
    let botao = document.getElementById('btn-env-limp');
    let lista = document.getElementById("lista");
    if(botao.innerHTML === 'limpar'){
        limpaTela(botao);
        return;
    }
    while( lista.firstChild ) {
        lista.removeChild( lista.firstChild );
      };
    let parametro = document.getElementById('busca').value;
    let data = fazGetBusca(parametro);
    let produtos = JSON.parse(data);
    produtos.forEach(element => {
        let prodLista = criaLista(element);
        lista.appendChild(prodLista);
    });
    if (parametro != 0){
        botaoLimpa(botao);
    }
}