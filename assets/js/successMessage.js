const divMessage = document.querySelector(".alert");

function ativar() {
  const msg = "Produto cadastrado com sucesso!";
  const message = document.createElement("div");
  message.classList.add("message");
  message.innerText = msg;
  divMessage.appendChild(message);

  setTimeout(() => {
    message.style.display = "none";
  }, 3000);
}
