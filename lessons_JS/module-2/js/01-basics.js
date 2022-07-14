/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

// // масив
// const friends = ['mango', 'Kiwi', 'Poly', 'Ajax']; 

// // выводит масивы в таблице
// console.table(friends); 

// // проказывает последний масив
// const lastIndex = friends.length - 1; 
// console.log(lastIndex);

// // обращение к масиву
// console.log(friends[2]);

// // заменяет массив внутри ячейки
// friends[0] = 'Hello World'; 
// console.log(friends);




/*
 * Передача по ссылке и по значению
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */

// переменные а и b - имеют значение 10
// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);

/* переменная а - имеет значение 20, переменная b - имеет значение 10
(сохраняеться копия предыдущей записи
пока не в теперещней не изменишь значение переменной b)*/
//  a = 20;
//  console.log(a);
//переменная b = 10
//  console.log(b);

// 2 переменные указывают на тот же самый масив
const a = [1, 2, 3];
const b = a;
console.log('a', a);
console.log('b', b);
// переменной a и b - присваиваеться 500, так как а и b связаны
a[0] = 500;
console.log('a', a);
console.log('b', b);
console.log(a === b);// они равны, так как связаны b = a;

// 2 масива не могут быть равны, так как это 2 разные ячейки. будет false
console.log([1, 2, 3] === [1, 2, 3]);


/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.table(friends);
const lastIndex = friends.length -1;

/*
так перебираються масивы
*/
// for(let i = 0; i <= lastIndex; i += 1){
//  friends[i] += '-1';//обращение к каждому елементу масиыв на итерации
// }
// console.table(friends);

/* 
используеться если не нужен индекс или не нужно изменять элемент масива
*/
for(const friend of friends){ // for..of
  console.log(friend);
}


