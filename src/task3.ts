//Задача 3. Інтерфейс для перетворювача. Створи інтерфейс Transformer<T, U> 
//з методом transform(value: T): U. 
//Реалізуй кілька прикладів трансформацій: 
//— рядок у число, — число у рядок, — об’єкт у JSON.

interface ITransformer<T, U> {
    transform(value: T): U
}

class StringToNumber implements ITransformer<string, number> {
    transform(value: string): number {
        const result = Number(value);
        return result;
    }
}

class NumberToString implements ITransformer<number, string> {
    transform(value: number): string {
        return value.toString();
    }
}

class ObjectToJson<T extends object> implements ITransformer<T, string> {
    transform(value: T): string {
            return JSON.stringify(value);
    }
}
