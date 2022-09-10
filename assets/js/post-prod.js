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
}