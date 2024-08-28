function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensagem = document.getElementById("titulo-mensagem");
  let paragrafo = document.getElementById("paragrafo");
  let menino = document.getElementById("menino");

  let textoCriptografado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCriptografado;
    tituloMensagem.textContent = "Texto criptografado com sucesso";
    paragrafo.textContent = "";
    menino.src = "./img/criptografado.jpg";
  } else {
    menino.src = "./img/menino.png";
    tituloMensagem.textContent = "Nenhuma mensagem encontrada";
    paragrafo.textContent = "Digite o texto que deseja criptografar ou descriptografar";
    swal("Opaaa!", "Você deve digitar um texto", "cuidado");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensagem = document.getElementById("titulo-mensagem");
  let paragrafo = document.getElementById("paragrafo");
  let menino = document.getElementById("menino");

  let textoCriptografado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCriptografado;
    tituloMensagem.textContent = "Texto descriptografado com sucesso";
    paragrafo.textContent = "";
    menino.src = "./img/descriptografado.jpg";
  } else {
    menino.src = "./img/menino.png";
    tituloMensagem.textContent = "Nenhuma mensagem encontrada";
    paragrafo.textContent = "Digite o texto que deseja criptografar ou descriptografar";
    swal("Opaaa!", "Você deve digitar um texto", "cuidadoo");
  }
}
