/*
 * Посчитать общую сумму покупок в корзине
 */

// способ №1 через for с счетчиком - если нужно перезаписать что-то 
const cart = [54, 28, 105, 70, 92, 17, 120, 12, 59, 70];
// 2.сделать переменную total до цикла
let total = 0;
// 1.перебрать масив
for(let i = 0; i < cart.length; i += 1){
  console.log(cart[i]);
  // 3.каждый елемент приплюсовать к тотал
  total += cart[i];
}
console.log('Total: ', total);

// способ №2 через for..of - если нужно просто доступ к элементу
for(const value of cart){
  total += value;
}
console.log('Total: ', total);
