/*
Операторы сравнения
*/
console.log(5 > 10); // false
console.log(15 > 10); // true

/*
Приведение (преоброзование) типов к числу
операнд слева и операнд справа всегда приводится к числу
*/
console.log(10 > 5);
console.log('10' > 5);

/*
Операторы равенства (== и ===), и неравенства (!= и !==)
<<ВСЕГДА ИСПОЛЗУЕМ СТРОГОЕ РАВЕНСТВО (===) и НЕРАВЕНСТВО (!==)>>
*/
let isEqual = 5 === 5;// true
 isEqual = 5 === '5';// false
console.log(isEqual);
