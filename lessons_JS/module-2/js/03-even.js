/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

// // Вариант №1
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// // 1.переменная тотал
// let total = 0;

// // 2.перебрать масив
// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];
//   console.log(number);

//   // 3.на каждой итерации проверить эдемент на четность
//   if (number % 2 === 0) {
//     console.log('Четное!');

//     // 4. если четный плюсуем к total
//     total += number;
//   }
// }
// console.log('Total: ', total);

// Вариант №2
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for(const number of numbers){
//   console.log(number);
//   if(number % 2 === 0){
//     console.log('Четное!');
//     total += number;
//   }
// }
// console.log('Total: ', total);

// Вариант №3
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;

for(const number of numbers){
  if(number % 2 !== 0){
console.log('Эту итерацию нужно пропустить', number);
continue;
  }
  console.log(`${number} - четное!`)
  total += number;
}
console.log('Total: ', total);

