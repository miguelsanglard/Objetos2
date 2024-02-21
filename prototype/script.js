// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}
Pessoas.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome + ' ' + this.idade;
}
const miguel = new Pessoas('Miguel', 'Sanglard', 17)
// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

// console.log(Object.getOwnPropertyNames(array.prototype))




// Liste os construtores dos dados abaixo
const li = document.querySelector('li');
Object.getOwnPropertyNames(li.innerHTML)
li; //'HTMLLIElement'
li.click; //Function
li.innerText; //'String'
li.value; //'Number'
li.hidden; //Boolean'
li.offsetLeft; //'Number'
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
//string