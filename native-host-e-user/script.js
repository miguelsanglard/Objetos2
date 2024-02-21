// Liste 5 objetos nativos
Function
Object
Number
String
True
// Liste 5 objetos do browser
Window
document
history
HTMLAllCollection
NodeList
// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if (typeof document.webKitVisibilityState !== "undefined") {
  console.log('Existe')
}