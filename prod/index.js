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
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["read"] = 2] = "read";
    Role[Role["backup"] = 3] = "backup";
})(Role || (Role = {}));
const user = {
    firstName: 'Saviam',
    age: 40,
    role: Role.backup
};
