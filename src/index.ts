// function add (num1: number, num2: number){
//     return num1 + num2
// }

// let result = add(5,8)
// console.log(result)

//---- segundo dia (pelo curso)-----

// let values: number [] = [10, 20, 40, 30] //colocando chavinhas amarelhas depois de definir q é number, ele vai indicar se tem
//  algum erro dentro do array




//Apple, 3, true

// let item:[string, number, boolean] = ['Apple', 3, true] // aqui é o uso do Taple, onde voce consegue definir diferentes tipos
//  dentro do mesmo array, só definir quais são e qual a ordem q eles devem vir

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





// // Day 3 - Exercise 3

// let isDouglas: boolean
// isDouglas = false

// /*Também funcionaria se colocasse o ' = true' logo depois
// de definir como boolean */

// console.log(`${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`)


//-----------------------------


// Day 3 - Exercise 4


// const integer: number = 6;
// const float: number = 6.66;
// const hex: number   = 0xf00d;
// const binary: number  = 0b1010011010;
// const octal: number  = 0o744;
// const negZero: number = -0;
// const actuallyNumber: number = NaN;
// const largestNumber :number = Number.MAX_VALUE;
// const mostBiglyNumber: number = Infinity;

// const members: number[] = [ // aqui estava 'any, mudou pra numer porque as variaveis são number
//   integer,
//   float,
//   hex,
//   binary,
//   octal,
//   negZero,
//   actuallyNumber,
//   largestNumber,
//   mostBiglyNumber
// ];

// members[0] = 12345; //só tirou aspas simples pq é number

// console.log(members);


//---------------------------------------

// Day 3 - Exercise 5

// const sequence :number[]  = Array.from(Array(10).keys());
// const animals : string[]  = ['pangolin', 'aardvark', 'echidna', 'binturong'];
// const stringsAndNumbers : (number | string)[] = [1, 'one', 2, 'two', 3, 'three'];
// const allMyArrays :(number | string)[][] = [sequence, animals, stringsAndNumbers];
// /* Na ultima linhas ele colocou chaves duas vezes porque é um array dos outros arrays, 
// então precisa indicar assim */

// console.log(allMyArrays);


//----Dia 4 ( pelo curso)---------------

/* Elw usa o comando tsc --watch para compilar
 automaticamente*/ 

 /*Ele incluiu o exclude no ts.config.json, 
 para não alterar um arquivo especifico, no caso
 ele excluiu atualizações no app.js,mesmo que mande
 compilar */



//  //---------------Classes----------------

// /*A Classe é uma 'fábrica' de objetos, 
// q podem ser cadastro de pessoas, de produtos, 
// login, etc. É o 'esqueleto' de tudo. Voce 
// cria objetos com as propriedades dentro da classe.
// Só instanciar com o 'new' e passar o valores dos parametros
// definidos dentro do 'constructor'.
// e precisa usar o 'this' para associar as propriedades
// às variaveis dentro do constructor */


//  class Users {
//     name: string
//     private balance: number /*Usando o 'private' 
//     só pode ser acessado dentro da class, fora da class não. E não pode ser alterado*/
   
   

//     constructor(n: string, b: number){
//         this.name = n
//         this.balance = b
//     }

//    // adicionando um metodo
   
//    addMoney (amount: number){
//     this.balance += amount //aqui ele soma o valor que tem com o que for adicionado 
    
//     }

//  }
 
//  const user1 = new Users('Saviam', 90)
//  user1.addMoney(100)



//  const user2 = new Users('Bruno', 20)
//  console.log(user1)


//-------------Interfaces---------------

/* Usando Interface ao inves de Classe, quando for criar
um objeto, precisa ter obrigatoriamente todas as propriedades
declaradas na interface (Item nesse caso) */

// interface Item{
//     name: string
//     price: number

//     itemPurchased(message: string):void
    
// }

// let product1: Item

// product1 ={
//     name: 'Apple',
//     price: 2,
//     itemPurchased(message: string){
//         console.log(message + ' '+ this.name)/*
//         usando ' ' com espaço entre ela e vazio, 
//         é o jeito certo de colocar espaço entre o código
//         e a mensagem, e não dando espaco direto na mensagem
//         antes de fechar as aspas  */
//     }
// }

// product1.itemPurchased('Voce acabou de comprar uma')



// Day 5 - Exercise 1

// interface CartItem {
//     id: number, 
//     title: string, 
//     variantId?: number /*colocando '?' depois da propriedade
//     ela se torna opcional, e não da erro */
// }

// function addToCart(
//     item: CartItem) {
//     console.log(`Adding "${item.title}" to cart.`);
//   }

//   addToCart({id: 1, title: 'shoes'});

//---------------------------------------------


// Day 5 - Exercise 2 ----implements


// interface data{
//     name: string,
//     age: number
// }


// class Person implements data {

//     constructor(
//         public name: string, 
//         public age: number) {}
//   }

//   const jane = new Person('Jane', 31);

//   console.log(`${jane.name} is ${jane.age} years old.`);


  //-----------------------------------------------



  // Day 5 - Exercise 3


// class MC {
//     greet (event:string = 'party'): string {
//       return `Welcome to the ${event}`;
//     }
//   }

//   const mc = new MC();
//   console.log(mc.greet('show'));

//------------------------------


// Day 5 - Exercise 4

// class Employee {
    
//     constructor(public title: string, public salary: number) {}
// }
// //     title: string;
// //     salary: number;
// //     constructor(title: string, salary: number) {
// //       this.title = title;
// //       this.salary = salary;
// //   } /*O exercicio inicial era assim, mas ele removeu as declarações
// // de title e salary, porque já estavam declaradas dentro do constructor, 
// // e também tirou o this. colocando 'public' direto antes das propriedades, 
// // substituindo o this. */

//   const employee = new Employee('Engineer', 100000);

//   console.log(`The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);


  //--------------------------------------------------

  // Day 5 - Exercise 5

// interface UserSchema {
//     id: number
//     name: string
// }

// class User implements UserSchema {
//     constructor(public name: string,  readonly id: number) {} //USANDO O readonly, voce consegue acessar fora da class, mas não consegue alterar, já no private, nem acessa nem altera
// }

// const user = new User('Dog', 1)

// console.log(user.id)

// user.name = 'Harold' // pode mudar
// // user.id = 5 // nao pode mudar

// console.log(`User:`, user)


//-------------------------------------


// class Movies{
//     //readonly id:number
//    // name:string
//    // quando se usa o 'private', coloca se o underscore "_" antes do nome da propriadade
//     constructor(
//         public readonly id:number,
//         public name: string, 
//         private _price :number
//         ){
//        // this.id = id
//       //  this.name = name
//     }
// }

// let movie1 = new Movies(1, 'Dejavu', 20)
// console.log(movie1)



//-----------------------------------------------

//---------INDEX SIGNATURE--------------

// class HotelRooms{
//     [roonNumber: string]: string
// /*Colocando dentro de chaves uma propriedade, seu typo, 
// e definindo essa chave como string, voce cria propriedades
// dinamicamente quando for instanciar um objeto, como no exemplo
// abaixo sendo o room.A201, room.A202, etc */    
// }

// let room = new HotelRooms()

// room.A201 = 'Saviam'
// room.A202 = 'Bruno'
// room.A15 = 'Rodrigues'

// console.log(room)


// //-------------------------------------------



// class Person{
//     constructor (public firstname: string,
//         public lastname:string,
//         public age: number)
//         {}
//         get greet (){
//            return this.firstname + ' ' + this.lastname
//         }
// }

// // Cliente do banco

// class Clients extends Person{// extends faz o inheritance (herança)
//    override get greet (){// usando o override get, voce consegue usar partes do metodo principal ou mudar ele todo
//         return 'Dear ' + super.greet //usar o super. é a mesma coisa que colocar 'this.firstname +' o restante das coisas
//      }
// }

// // Funcionario do banco

// class Staff extends Person{
//   override  get greet (){
//         return 'Hi '+ super.greet
//      }
// }

// let client1 = new Clients('Saviam', 'Bruno', 36)
// client1.greet /* aqui ele puxou o metodo diretoda classe Person
// sem precisar criar, porque esta usando a 'herança' (inheritance)
// Só funciona em typescript, não funciona em javascript*/


// let staff1 = new Staff('Ana', 'Silva', 36 )

// console.log(client1.greet)
// console.log(staff1.greet)

//-------dia 7-----------------------


// Day 7 - Exercise 1

// interface User {
//   name: string;
//   age: number;
//   occupation: string;
// }

// interface Admin {
//   name: string;
//   age: number;
//   role: string;
// }

// type Person = User | Admin; // aqui eu posso usar o 'Person' como tipo em outro lugares, como la embaixo na função, por exemplo

// const persons: Person[] = [
//   {
//       name: 'Max Mustermann',
//       age: 25,
//       occupation: 'Chimney sweep'
//   },
//   {
//       name: 'Jane Doe',
//       age: 32,
//       role: 'Administrator'
//   },
//   {
//       name: 'Kate Müller',
//       age: 23,
//       occupation: 'Astronaut.'
//   },
//   {
//       name: 'Bruce Willis',
//       age: 64,
//       role: 'World saver.'
//   }
// ];



// function logPerson(person: Person) {
  
  
//   let additionalInformation: string;
//   if ('role' in person) {
//       additionalInformation = person.role;
//   } else {
//       additionalInformation = person.occupation;
//   }
//   console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
// }


// persons.forEach(logPerson);


//-----------------------------------------


// Day 7 - Exercise 2

// class Animal {
//   // name:string -> poderia colocar assim ao inves de 'public' no constructor
//   constructor(public name: string) {
//     this.name = name;
//   }
//   move(meters: number) {
   
//     console.log(`${this.name} moved ${meters}m.`)
//   }
// }

// class Snake extends Animal{
  

//   move(meters: number) {
//     console.log('Slithering...')
//     super.move(meters)
//   }
// }

// class Pony extends Animal{
//   move(meters:number) {
//     console.log('Galloping...')
//     super.move(meters)
//   }
// }


// const sammy = new Snake("Sammy the Snake")
// sammy.move(5)

// const pokey = new Pony("Pokey the Pony")
// pokey.move(34)

//--------------------------------------------



// Day 7 - Exercise 3

// class Furniture {
//   constructor(protected manufacturer: string = 'IKEA') {}
// }

// class Desk extends Furniture {
//   kind() {
//     console.log(`This is a desk made by ${this.manufacturer}`)
//   }
// }

// class Chair extends Furniture {
//   kind() {
//     console.log(`This is a chair made by ${this.manufacturer}`)
//   }
// }

// const desk = new Desk()
// desk.kind()
// //desk.manufacturer // Deve retornar um erro

// const chair = new Chair()
// chair.kind()
// //chair.manufacturer // Deve retornar um erro



// Day 7 - Exercise 4

// let multiply: (val1: number, val2: number) => number;
// let capitalize: (val: string) => string;

// capitalize = function(value: string): string {
//   return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
// }

// multiply = function(x: number, y: number): number {
//   return x * y;
// }

// console.log(capitalize(`nifty ${multiply(5, 10)}`));




// Day 7 - Exercise 5

function layEggs(quantity: number, color: string): void {
  console.log(`You just laid ${quantity} ${color} eggs. Good job!`);
}

layEggs(2, 'Blue');