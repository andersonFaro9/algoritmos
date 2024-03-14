
//somar o idice inicial com o indice final
// e divide por 2 que vai dar a posição na lista.
//e o resultado é a posição da lista

//busca binária

function searchBinary(arrays, item) {
  let baixo = 0
  let alto = arrays.length - 1
  while (baixo <= alto) {
    let meio = Math.floor((baixo + alto) / 2)
    let chute = arrays[meio]
    if (chute === item) {
      return meio
    }
    if (chute > item) {
      alto = meio - 1
    } else {
      baixo = meio + 1
    }
  }
  return null
}

const numbers = [1, 3, 5, 6, 7, 9]
console.log('resultado:', searchBinary(numbers, 6))



