function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}

function limpar(){
    document.getElementById('nome').value = ''
    document.getElementById('descricao').value = ''
    document.getElementById('categoria').value = ''
    document.getElementById('preco').value = ''
}

function cadastraUsuario() {
    event.preventDefault(); 
    let url = "http://localhost:3000/produtos";
    let nome = document.getElementById("nome").value;
    let descricao = document.getElementById("descricao").value;
    let categoria = document.getElementById("categoria").value;
    let preco = document.getElementById("preco").value;

    body = {
        "nome": nome,
        "descricao": descricao,
        "categoria": categoria,
        "preco": preco
    }

    fazPost(url,body);

    alert('Produto foi cadastrado com sucesso!');
    limpar();
}