function sortearNumero() {
  const min = 1;
  const max = 59;

  return Math.floor(Math.random() * max) + min;
}

function gerarNumerosRandomicos(quantidade) {
  const numerosSorteados = [];
  let numeroSorteado;

  for (i = 0; i < quantidade; i++) {
    do numeroSorteado = sortearNumero();
    while (numerosSorteados.includes(numeroSorteado))

    numerosSorteados.push(numeroSorteado)
  }

  return numerosSorteados.sort((a,b)=> a-b)
}

console.log(gerarNumerosRandomicos(7));
