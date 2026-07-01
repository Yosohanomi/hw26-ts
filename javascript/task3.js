"use strict";
//Задача 3. Інтерфейс для перетворювача. Створи інтерфейс Transformer<T, U> 
//з методом transform(value: T): U. 
//Реалізуй кілька прикладів трансформацій: 
//— рядок у число, — число у рядок, — об’єкт у JSON.
class StringToNumber {
    transform(value) {
        const result = Number(value);
        return result;
    }
}
class NumberToString {
    transform(value) {
        return value.toString();
    }
}
class ObjectToJson {
    transform(value) {
        return JSON.stringify(value);
    }
}
