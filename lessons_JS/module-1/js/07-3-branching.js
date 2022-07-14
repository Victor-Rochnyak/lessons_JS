/*
Оператор ветвлений if
*/
if (5 < 3) {
  //если false то тело if проигнорируеться
  console.log(false);
}
console.log('дальше');

/*
Оператор ветвлений if...else
*/ if (5 > 30) {
  console.log('x > y');
} else {
  console.log('x < y');
}

/*
Оператор ветвлений else...if
*/
const salary = 1000; // работает до первого совпадения true
if (salary < 500) {
  console.log('Уровень 1');
} else if (salary > 500 && salary <= 1500) {
  console.log('Уровень 2');
} else if (salary > 1500 && salary < 3000) {
  console.log('Уровень 3');
} else {
  console.log('Уровень 4');
}
console.log('Дальше');

/*
Тернарный оператор "?" - если позитивный результат (true) , ":" - если негативный результат (false)
*/
// const balance = 1000; вариант задачи 1
// let message
// if (balance >= 0) {
//   message = 'Позитивный баланс';
// } else {
//   message = 'Негвтивный баланс';
// }
// console.log(message);

const balance = 1000;
const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';
console.log(message);

/*
Блочная обдасть
*/
if (true) {
  const a = 5;
  console.log(b); // не будет доступа, так как задана переменная не из этого блока
}
if (true) {
  const b = 10;
  console.log(a); // не будет доступа, так как задана переменная не из этого блока
}


