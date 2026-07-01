"use strict";
//Задача 4. Обмеження для типів, що реалізують інтерфейс.
//  Створи інтерфейс Printable з методом print(): void.
// Опиши узагальнену функцію
// printAll<T extends Printable>(items: T[]), s
//яка викликає метод print() для кожного елемента масиву.
function printAll(items) {
    items.forEach(item => {
        item.print();
    });
}
