function codificarTexto(texto) {
  // Utiliza a função btoa() para codificar o texto em Base64
  let textoCodificado = btoa(texto);
  return textoCodificado;
}

function decodificarTexto(textoCodificado) {
  try {
    // Utiliza a função atob() para decodificar a string em Base64
    let textoDecodificado = atob(textoCodificado);
    return textoDecodificado;
  } catch (error) {
    // Lida com erros, caso ocorram durante a decodificação
    console.error("Erro ao decodificar o texto:", error);
    return null;
  }
}

// Solicita ao usuário que insira um texto
let textoDoUsuario = prompt("Digite algum texto:");

// Codifica o texto inserido pelo usuário
let textoCodificado = codificarTexto(textoDoUsuario);

if (textoCodificado) {
  console.log("Texto Original:", textoDoUsuario);
  console.log("Texto Codificado:", textoCodificado);

  // Exibir alertas
  alert("Texto Original: " + textoDoUsuario);
  alert("Texto Codificado: " + textoCodificado);
}