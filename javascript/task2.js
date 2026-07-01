"use strict";
// Задача 2. Менеджер операцій. Створи клас OperationManager<T>, який зберігає 
//список операцій будь-якого типу і має метод
// executeAll(callback: (item: T) => void) для виконання їх усіх.
class OperationManager {
    constructor(operationList) {
        this.operationList = operationList;
    }
    executeAll(callback) {
        for (const item of this.operationList) {
            callback(item);
        }
    }
}
const stringManager = new OperationManager(['Hello', 'World', '!']);
stringManager.executeAll((item) => {
    console.log(item.toUpperCase());
});
