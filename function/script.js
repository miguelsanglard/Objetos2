// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p')
const paragrafosArray = Array.from(paragrafos)
const paragrafosLimpos = paragrafosArray.map((item) => {
  item = item.innerHTML.length
  return item
})
const paragrafosSoma = paragrafosLimpos.reduce(function (anterior, atual) { return anterior + atual; }, 0);
console.log(paragrafosSoma)
// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null
  conteudo ? elemento.innerHTML = conteudo : null
  return elemento
}
console.log(criarElemento('li', 'ativo', 'a'))
// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const novaFuncao = criarElemento.bind(null, 'h1', 'titulo')
console.log(novaFuncao('Titulo'))

