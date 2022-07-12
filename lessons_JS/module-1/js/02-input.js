/*
- Ввод пользователя
- Методы вызова окна window.confirm() и window.prompt()
*/

// "Хотите продлить подписку?" - метод confirm()

// const shouldRenew = confirm ("Хотите продлить подписку?");
// const message = "Хотите продлить подписку?";
// const shouldRenew = confirm(message);
// console.log(shouldRenew);


// Введите кодичество товаров - метод prompt()
// Number - конструкция для чисел - возвращает число

// const quantity = prompt("Введите кодичество товаров");
let quantity = prompt("Введите кодичество товаров");
quantity = Number(quantity); // выражение присваивания числа
console.log(quantity);
console.log(typeof quantity);