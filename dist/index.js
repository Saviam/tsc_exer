"use strict";
class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    greet() {
        console.log('Hi');
    }
}
class Clients extends Person {
    balance() {
        console.log('Seu balanço é de $100');
    }
}
let client1 = new Clients('Saviam', 'Bruno', 36);
client1.greet;
