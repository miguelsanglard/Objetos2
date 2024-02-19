// Transforme o objeto abaixo em uma Constructor Function
function Constructor(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.ativo = function andar() {
    console.log(nome + ' andou');
  }
}
UseConstructor = new Constructor('miguel', 17)
UseConstructor.ativo()
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Constructor('João', 20)
const maria = new Constructor('Maria', 25)
const bruno = new Constructor('Bruno', 15)
joao.ativo(), maria.ativo(), bruno.ativo()
// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    })
  }
  this.removeClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    })
  }
}
const listaItens = new Dom('li');
const ul = new Dom('ul')
listaItens.addClass('ativar')


ul.addClass('ativar-ul')