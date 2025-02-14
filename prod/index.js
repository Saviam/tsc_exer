"use strict";
// function add (num1: number, num2: number){
//     return num1 + num2
// }
// let result = add(5,8)
// console.log(result)
//---- segundo dia (pelo curso)-----
// let values: number [] = [10, 20, 40, 30] //colocando chavinhas amarelhas depois de definir q é number, ele vai indicar se tem algum erro dentro do array
//Apple, 3, true
// let item:[string, number, boolean] = ['Apple', 3, true] // aqui é o uso do Taple, onde voce consegue definir diferentes tipos dentro do mesmo array, só definir quais são e qual a ordem q eles devem vir
// item[1].toString // esse é só um exemplo code complete, tem no TS mas não no JS
// enum Role{admin = 1, read = 2, backup = 3} // com enum é possivel definir as variaveis e valores sem ter q criar uma variavel pra cada uma
// const user = {
//     firstName:'Saviam',
//     age: 40,
//     role:Role.backup
// }
// function add (num1: number, num2: number): number { // esse outro number, é chamando de hard code, mas pode deixar q o TS faz o auto detect
//     return num1 + num2
// }
// function result (price: number){ // apesar de ter tipado como number, o TS autodetecta a função como 'void' e não 'number', só porque a função não tem um return
//     console.log('the result is ' + price)
// }
// result (add(6,5))
//------------------------------------------------
// /* no TS elejá identifica que é um objeto, 
//  sem precisar indicar depois do nome da const */ 
// const user :{
//     firstName: string;
//     age: number;
//     lastName: string
// /*Eu até poderia fazer isso ai em cima caso não fosse obvio, 
// mas o TS já identifica os tipos dentro do objeto,
// Então por boas práticas, NÃO se coloca esse hard code */    
// } = {    
//     firstName : 'Saviam',
//     age: 36,
//     lastName: 'S'
// }
// user.lastName = 'João'; 
// //----------------------------------------------
// let itemInput: unknown /*O unknown é diferente do any porque
// ele precisa de uma verificação, não aceita qualquer coisa no tipo */
// let itemName: string
// itemInput = 10
// itemInput = 'Apple'
// if(itemInput === 'string'){
//     itemName = itemInput
// }
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
console.log(generateError('The application crashed', 500));
/*O 'never' para a aplicação, gera um erro,
ele não passa nenhuma informação */ 
