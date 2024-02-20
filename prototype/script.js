// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.nomeCompleto = function (nome, sobrenome, idade) {
    console.log(this.nome + ' ' + this.sobrenome + ' ' + this.idade)
  }
}
CriarPessoas = new Pessoas('Miguel', 'Sanglard', 17)
CriarPessoas.nomeCompleto()
// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
const lista = document.querySelectorAll('li')
const listaArray = Array.from(lista)
const ListeMetodos = Object.getOwnPropertyNames(Array.prototype)
console.log(ListeMetodos)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');
const liConstructors = Object(li.prototype)
aa = Object.getOwnPropertyNames(li)
console.log(aa)
li;
// HTMLLIElement()
li.click;
// String
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;