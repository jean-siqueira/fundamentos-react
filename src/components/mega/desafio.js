/*function sortearNumero() {
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
}*/


function gerarNumeroNaoContido(min, max, array) {
  const aleatorio = parseInt(Math.random() * (max +1 - min) + min)
  return array.includes(aleatorio) ?
  gerarNumeroNaoContido(min, max, array) : aleatorio
}

function gerarNumeros(qtde) {
  const numeros = Array(qtde)
    .fill(0)
    .reduce((nums) => {
      const novoNumero = gerarNumeroNaoContido(1, 60, nums)
      return [...nums, novoNumero]
    }, [])
    .sort((n1, n2) => n1 - n2)
  return numeros
}

console.log(gerarNumeroNaoContido(1, 60, []))

console.log(gerarNumeros(6))

