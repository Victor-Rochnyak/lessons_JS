/* 
Напиши скрипт обработки покупки в магазине.
-Баланс пользователя хранится в переменной balance
-Сумма прокупки хранится в переменной payment

-Перед проверкой вывести сообщение:
<<Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств
на счету>>

-Если сумма прокупки не превишает баланс:
 -Вычесть из баланса сумму прокупки
 -Вывести сообщение <<На счету осталось [число] кредитов>>
-Если сумма прокупки превышает баланс:
 - Вывести сообшение <<На счету недостаточно средств для 
 проведения операции!>>
-В конце вывести сообщение <<Операция завеошена>>
*/

// 1. вары(переменные)
let balance = 10000;
const payment = 2000;

console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств
на счету`);
//2. Условие сумма <= баланс
if (balance >= payment) {
  console.log('ok');
  balance -= payment;
  console.log(`На счету осталось ${balance} кредитов`);
} else {
  console.log('На счету недостаточно средств для проведения операции!');
}
//'Все хорошо, снимаем деньги...Спасибо за покупку!'
console.log('Операция завершена');


