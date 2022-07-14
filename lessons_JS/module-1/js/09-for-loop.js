/*
Цикл for
*/

/*
for(иницилизация; условие; пост - выражение){
    тело цыкла
 } - запускает счетчик, при первом fulse, цыкл прекоащаеться
*/
for (let i = 0; i <= 5; i += 1) {
  // от меньшего к большему
  console.log(i);
}
for (let i = 5; i >= 0; i -= 1) {
  // от большего к меньшему
  console.log(i);
}
console.log('работает');

/*
Pre-increment и Post-increment
*/
for (let i = 0; i < 5; i++) {
  // ЭТО ГАДОСТЬ, НЕ ИСПОЛЬЗОВАТЬ
  console.log(i);
}
let a = 10;
const b = a++;
console.log(a); // будет выражение 11 а не 10
console.log(b); // будет выражение 10

/*
Напиши скрипт который подсчитывает общую сутту зарплат работников.
Количество работников хранится в переменной employees.
Зарплата каждого работника это случайное число от 500 до 5000
Записать сумму в переменную totalSalary и вывести в консоль
*/

// 1. сделать вары(переменные)
const minSalary = 500;
const maxSalary = 5000;
const employees = 5;
let totalSalary = 0;
// 2. передрать работников в цыкле
for (let i = 1; i <= employees; i += 1) {
  // 3. сгенерить соучайное ЗП
  const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
  console.log(`ЗП работника номер ${i} - ${salary} `);
  // 4. прибавить к тоталу
  totalSalary += salary;
}
// 5. вывести лог
console.log('totalSalary:', totalSalary);

/*
Напиши скрипт который подсчитывает сумму всех четных чисел,
которые входят диапазон чисел в переменных от min до max.
Например, если min=0 и max=5, то диапазон 0-5, и в нем два четных
 числа - 2 и 4, их сумма 6
 */

// 1.Обюявить переменные(вары)
const min = 6;
const max = 13;
let total = 0;
// 2.for от min до max с шагом в 1
for (let i = min; i <= max; i += 1) { // вариант №1
  // 3. Вычисление четных чисел
  // 3.проверяем остаток от деления
  if (i % 2 === 0) {
    console.log('четное: ', i);
  }
  // 4.пишем сумму
  total += i;
}
console.log('total: ',total);

for (let i = min; i <= max; i += 1) { // вариант №2
    // 3.проверяем остаток от деления
    if (i % 2 !== 0) {
      console.log(' не четное: ', i);
      continue;
    }
    // пишем сумму
    console.log('четное ', i);
    total += i;
  }
  console.log('total: ',total);