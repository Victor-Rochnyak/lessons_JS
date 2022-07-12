/*
- Переменные и типы примитивов
- const и let - вызов переменных
- логиривание с методом console.log()
-Уникальность идентификатора
*/

const age = 10;
const totalPrice = 200.74;
const userName = "Chelsy";
const messge = "Добро пожаловать";
const isOpen = true;
const shouldCofirm  = false;

// console.log(isOpen);
/*
- Оператор typeof - проверяет в коде тип хранящейся в переменной: number, string, boolean.
*/
const type = typeof 5;
console.log(type);

/*
- Как alert() блокирует интерпритацию открывая мини окно
*/
console.log("До");
alert("Open");
console.log("После");