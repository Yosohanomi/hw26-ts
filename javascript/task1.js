"use strict";
//Задача 1. Отримання випадкового елемента.  
//Опиши функцію getRandom<T>, яка приймає масив будь-якого типу
// та повертає випадковий елемент з нього.
function getRandom(array) {
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
}
console.log(getRandom(["hi", "hello", "erere"]));
