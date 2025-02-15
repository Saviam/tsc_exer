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
// function generateError(message: string, code: number): never{
//     throw{message: message, errorCode: code}
// }
// console.log(generateError('The application crashed', 500))
// /*O 'never' para a aplicação, gera um erro, 
// ele não passa nenhuma informação */
// ------alias type------------
// type Users = {
//     firstName: string;
//     age: number;
// }
// /*Usando 'type' pode armazenar propriedades num grupo e pode
// reutilizar  em outras constantes tambem*/
// const user : Users = {    
//         firstName : 'Saviam',
//         age: 36,
//     }
// --------------------------------------
//-----Usando Union ( união de 2 tipos para tipos diferentes de dados no input)
// e pode adicionar mais de 2 tipos também 
// function userInput (input1: number | string, input2: number| string) { // esse outro number, é chamando de hard code, mas pode deixar q o TS faz o auto detect
//     let result 
//     if (typeof input1 === 'number' && typeof input2 === 'number'){
//         result = input1 + input2
//     }
//     else{
//         result = input1.toString() + input2.toString()
//     }
//     return result
// }
// const combinePrices = userInput(10,20)
// console.log(combinePrices)
// const combineName = userInput('Apple','Avocado')
// console.log(combineName)
//--------------------------------------------------
//------Literal Types--------
/*Com literal types, voce define exatamente qual o valor
permitido para ser inserido no input ou variavel */
// let productPrice : 10 | 20 | 30
// let productSize: 'S' | 'M' | 'L'
// productPrice = 10
// productSize = 'S'
//------------------------------------
//------------Intersection--------------
// type User = {
//     firstName: string
//     age: Number
// }
// type JobRole = {
//     id: number
//     role: string
// }
// type employee = User & JobRole
// const e1: employee = {
//     firstName: "Saviam",
//     age: 35,
//     id: 221,
//     role:'Admin'
// }
// // Day 3 - Exercise 1
// let pi = 3.14159;
// let tau = pi * 2;
// console.log(`${tau} is ${pi} times two.`);
// //-------------------------
// // // Day 3 - Exercise 2
// let pie : string // só inclui o 'string' pra falar q era pra ser string
// pie = 'blueberry'
// console.log(`I like to eat ${pie}-flavored pie.`)
// //----------------------------------------
// Day 3 - Exercise 3
let isDouglas;
isDouglas = false;
/*Também funcionaria se colocasse o ' = true' logo depois
de definir como boolean */
console.log(`${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`);
