/*
Длинна строки. свойство length
*/
const message = 'В этой строке 26 символов.';
console.log(message.length); // обращение к свойству
message.length // обращение к свойству
/*
- Конкатенация строк
*/
const firstName = 'Chelsy';
const lastName = 'Emerald';
// const fullName = firstName + lastName; // сшивание строки(конкатенация)
const fullName = firstName + ' ' + lastName; // сшивание строки и пробел между ними(конкатенация)
console.log(fullName);

/*
- Напиши скрипт который выведет строку в фармате:
Гость  x y поселяеться в z номер q,
подставив вместо x y z q значения переменных 
*/
// ${свойство} - шаблонные строки
const room = 716;
const type = 'VIP';
const welcomeMsg = `Гость ${firstName} ${lastName} поселяеться в ${type} номер ${room}`;
console.log(welcomeMsg);
/*
Шаблонные стороки (template srtring)
Возвращаемся к составлению строки поселения в отель
*/
const quantity = 5;
const orderMsg = `Вы заказываете ${quantity} холодильнков.`;
console.log(orderMsg);

/*
Нормализация с методом toLowerCase();
*/
//'Что ищем?'
// const brand = 'SamsUng';
// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand);
// свойство.toLowerCase() - приводит к нормализации правильного написания бренда\текста

// воторой вариант наисания 
let brand = 'SamSunG';
brand = brand.toLowerCase();
console.log(brand);

/*
Поиск в строке с методом includes()
*/
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная кампания #fatlivesmatter';

console.log(string1.includes(blacklistedWord1));// true
console.log(string1.includes(blacklistedWord2));// false

console.log(string2.includes(blacklistedWord1));// false
console.log(string2.toLowerCase().includes(blacklistedWord2)); // приводит строку в нтжний регистр и выводит true

const normalizedString2 = string2.toLowerCase();// еще один способ привести строку в нижний регистр и найти слово РАСПРОДАЖА
console.log(normalizedString2.includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));// false
console.log(string3.includes(blacklistedWord2));// false



