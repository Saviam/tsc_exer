"use strict";
let product1;
product1 = {
    name: 'Apple',
    price: 2,
    itemPurchased(message) {
        console.log(message + ' ' + this.name);
    }
};
product1.itemPurchased('Voce acabou de comprar uma');
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const jane = new Person('Jane', 31);
console.log(`${jane.name} is ${jane.age} years old.`);
