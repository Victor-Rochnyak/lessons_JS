/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework

// Метод №1
const title = 'Top 10 benefits of React framework';
// Привел к нижнему регистру
const normalizedTitle = title.toLowerCase();
console.log(normalizedTitle);
// разбил по словам отдельно
const words = normalizedTitle.split(' ');
console.log(words); 
// Сшил с тире(-)
const slug = words.join('-');
console.log(slug);

// Метод №2
// Вызовы, вызываються на месте предыдущего вызова
const slug1 = title.toLowerCase().split(' ').join('-');
console.log(slug1);
