/*
Парс числа с Number.parceInt() и Namber.parseFloat()
Number.parceInt - парсит число до первого символа
Number.parceFloat() - парсит число до первой буквы и запятой
*/

// let elementWidth = "50px";
//  const result = Number.parseInt(elementWidth);
//  console.log(result);

let elementWidth = "50px";
elementWidth = Number.parseInt(elementWidth);
console.log("elementWidth: ", elementWidth);

let elementHeight = '200.74px';
elementHeight = Number.parseFloat(elementHeight);
console.log('elementHeight: ', elementHeight);

/*
- Метод число .toFixed(digits) - вызываеться на самом числе. хорошо для работы з деньгами
- Матрешка на примере console.log(Number(число.toFixed(digits)))
*/

// const salary = 1300.16472; 
// console.log(salary.toFixed(2)); // возвращает строку  1300.16
// console.log(salary); // вызовет число 1300.16472;

// let salary = 1300.16472;
// salary = salary.toFixed(2); // (число) - количесвто чисел после точки 
// salary = Number(salary); // преоброзование строку в число
// console.log(salary);

let salary = 1300.16472;
salary = Number(salary.toFixed(2)); // метод матрешки
// console.log(salary);
console.log(Number(salary.toFixed(2))); // можно записать в консоле 


/*
- Приведение (преоброзование) к числу с Number(value)
- Значение NaN (Not a Number) и метод Number .isNaN(value)
*/
let quantity = '30';
let value = 'Эту строку невозможно привести к числу';
console.log(Number(quantity)); //приводит строку в число
console.log(Number(value)); //не может привести буквы в число

/*
- Обьект Math & Math.pow()- возведение в степень. 
Math.sqrt()- квадратный корень
- Возведение в степень 
- Exponent operator
*/

// const base = 2; // число которое нужно возвести в степень
// const power = 5; // степерь в которую нужно возвести
// const result = Math.pow(base,power);
// console.log(result);
// console.log(2 ** 5); // так же вычислает степень 

/*
-Напиши скрипт который просит пользователя ввести число и степень,
возводит число в эту степень и выводит результат в консоль
*/
// 1. попросить ввести число и сохранить в переменную
// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);
// // 2. попросить ввести степень и сохранить в переменную
// let power = prompt('Давай степень');
// power = Number(power);
// console.log(power);
// // 3. возвести введенные данные в степень и вывести
// const result = base ** power;
// console.log(result);


/*
Генерим псевдослучайные числа
-Math.random()
-Math.round()
*/

// формула генерации случайного числа Math.random
// const max = 50;
// const min = 20;
// console.log(Math.random() * (max - min)+ min);
// Math.random() * (max - min)+ min;

// формула генерации случайного числа Math.round
const max = 50;
const min = 20;
const result = Math.round(Math.random() * (max - min )+ min);
console.log(result);