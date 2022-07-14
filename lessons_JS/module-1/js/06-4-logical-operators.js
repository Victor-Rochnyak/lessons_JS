/*
Приведение к булю на примере Boolean(value)
*/
console.log(Boolean(555));// true
console.log(Boolean('false'));// true
console.log(Boolean(''));// false
console.log(Boolean(NaN));// false

/*
Логическое И (оператор &&)
-Запинаеться на лжи
-Возвращает то, на чем запнулось или последний операнд
*/
console.log(5 && 6);// будет 6
console.log(5 && 6 && 7 && 'hello');// будет 'hello'
console.log(0 && 6);// будет 0/false
console.log(false && 6);// будет false
console.log(5 && 6 && false && 'mango');// будет false

/*
Логическое ИЛИ (оператор ||)
-Запинаеться на правде
-Возвращает то, на чем запнулось или последний операнд
*/
console.log(5||7||9||10);// дудет 5
console.log(false||7||0||10);// дудет 7
console.log(false||0||null||0);// дудет 0 -последний оперант

/*
Логическое НЕ (оператор !)
Делает инверсию прадва > ложь и ложь > правда
*/
console.log(!false);// true
console.log(!'4444');// false
console.log(!true);// true