// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
function task3(){
    let a = +prompt('Введите A');
    let b = +prompt('Введите B');
    let c;
    
    if (a > 0 && b > 0){
        if (a >= b){
            c = a - b;
            alert('Оба числа положительные их разность: ' + c);
        }else {
            c = b - a;
            alert('Оба числа положительные их разность: ' + c);
        }
    } else if (a < 0 && b < 0) {
        c = a * b;
        alert('Оба числа отрицательные их произведение: ' + c);
    } else {
        c = a + b;
        alert('Числа разных знаков их сумма : ' + c);
    }
}
// Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
function task4(){
    let a = +prompt('Введите число в промежутке от 0..15');

    switch(a) {
        case 0:
            alert('0,1,2,3,5,6,7,8,9,10,11,12,13,14,15')
        break
        case 1:
            alert('1,2,3,5,6,7,8,9,10,11,12,13,14,15')
        break
        case 2:
            alert('2,3,5,6,7,8,9,10,11,12,13,14,15')
        break
        case 3:
            alert('3,4,5,6,7,8,9,10,11,12,13,14,15')
        break
        case 4:
            alert('4,5,6,7,8,9,10,11,12,13,14,15')
        break
        case 5:
            alert('5,6,7,8,9,10,11,12,13,14,15')
        break
        case 6:
            alert('6,7,8,9,10,11,12,13,14,15')
        break
        case 7:
            alert('7,8,9,10,11,12,13,14,15')
        break
        case 8:
            alert('8,9,10,11,12,13,14,15')
        break
        case 9:
            alert('9,10,11,12,13,14,15')
        break
        case 10:
            alert('10,11,12,13,14,15')
        break
        case 11:
            alert('11,12,13,14,15')
        break
        case 12:
            alert('12,13,14,15')
        break
        case 13:
            alert('13,14,15')
        break
        case 14:
            alert('14,15')
        break
        case 15:
            alert('15')
        break
        default:
        alert('Написанно же от 0 до 15')
    }
}
// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
function task5(){
    let a = +prompt('Введите А');
    let b = +prompt('Введите B');
    let par = prompt('Введите операцию "+" , "-" , "*" , "/"');
    let c;
        if (par == '+'){
            c = a + b
            console.log(c)
        } else if (par == '-'){
            c = a - b
            console.log(c)
        }else if(par == '*'){
            c = a * b
            console.log(c)
        }else if (par == '/') {
            c = a / b
            console.log(c)
        }else{
            console.log('Неверный знак ' + par)
            return
        }
}
// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических операций 
// (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
function task6(){
    let arg1 = +prompt('Введите A')
    let arg2 = +prompt('Введите B')
    let x = +prompt('Введите операцию 1 = "+" , 2 = "-" , 3 = "*" , 4 = "/"');
    let result;
    function mathOperation (arg1, arg2, x){
        switch (x) {
            case 1:
                result = arg1 + arg2
                console.log(result)
                break
            case 2:
                result = arg1 - arg2
                console.log(result)
                break
            case 3:
                result = arg1 * arg2
                console.log(result)
                break
            case 4:
                result = arg1 / arg2
                console.log(result)
                break
        }
    }
    mathOperation(arg1, arg2, x)
}
// *Сравнить null и 0. Попробуйте объяснить результат.
// null это пустой объект, а 0 это число 
