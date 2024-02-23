// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso')
const CursosArray = Array.from(cursos)

const objetosCurso = CursosArray.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;

  return {
    titulo,
    descricao,
    aulas,
    horas
  }
})
console.log(objetosCurso)
// Retorne uma lista com os
// números maiores que 100

const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorNumero = numeros.filter(n => n > 100);
console.log(maiorNumero)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
if (instrumentos.includes('Baixo')) {
  console.log(true)
} else {
  console.log(false)
}

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]
console.log(compras)
let totalCompras = compras.map(compras => +compras.preco.replace('R$ ', '').replace(',', '.')
)
let soma = 0;
for (let i = 0; i < totalCompras.length; i++) { soma += numeros[i]; }
console.log(soma)