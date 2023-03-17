//Напишіть функцію, що приймає n обчислює суму чисел 1 + 2 + ... + n.

//з використанням циклу
function sumTo(numbers) {
    let result = 0;
    for (let i = 0; i<=numbers; i++) {
        result += i;
    }
    
    return result;
}
alert(`Результат отриманий за допомогою циклу: ${sumTo(100)}`);

//з використанням рекурсії
function sumOfNumbers(num) {
    if (num === 1) return 1;
    return num + sumOfNumbers(num-1);
}
alert(`Результат отриманий за допомогою рекурсії: ${sumOfNumbers(100)}`);


