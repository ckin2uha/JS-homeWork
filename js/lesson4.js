// Написать функцию, преобразующую число в объект. 
// Передавая на вход число от 0 до 999, надо получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, 
// десятки и сотни. Например, для числа 245 надо получить следующий 
// объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
function createObj (ch) {
    let arr = [];
    arr = [...`${ch}`]
    if(typeof(ch) == 'string' || ch < 0 || ch === undefined){
        return console.log(`Число ${ch} < 0 или не является числом`)
    } else {
        if (arr.length == 1) {
            return object = {
                Единиц: arr [0]
            }, object
        } else if (arr.length == 2) {
            return object = {
                Дясятков: arr [0],
                Единиц: arr [1],
            }, object
        }else if (arr.length == 3) {
            return object = {
                Сотен: arr[0],
                Десятков: arr[1],
                Единиц: arr[2],
            }, object
        }else{
            return console.log(`Число ${ch} превышает колличество символов`,{}) 
        }
    }
}




