// Задача 2. Менеджер операцій. Створи клас OperationManager<T>, який зберігає 
//список операцій будь-якого типу і має метод
// executeAll(callback: (item: T) => void) для виконання їх усіх.

class OperationManager<T> {
    constructor (
        public operationList:T[]
    ){}
    executeAll(callback: (item: T) => void) {
        for (const item of this.operationList) {
            callback(item);
        }
    }
}

const stringManager = new OperationManager<string>(['Hello', 'World', '!']);
stringManager.executeAll((item) => {
    console.log(item.toUpperCase());
});