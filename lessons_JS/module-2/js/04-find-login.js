/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
// let message =`Пользователь ${loginToFind} не найден.`;

//метод №1
// for(let i = 0; i < logins.length; i += 1){
//     const login = logins[i];
//     console.log('Login: ', login);

//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if(login === loginToFind){
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
// }
// console.log(message);

//вариант №2

// for( const login of logins){
//     console.log('Login: ', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if(login === loginToFind){
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
// }
// console.log(message);

//Вариант №3 самое лучшее решениеп
// декларативный код
const message = logins.includes(loginToFind)
? `Пользователь ${loginToFind} найден.`
: `Пользователь ${loginToFind} не найден.`;
console.log(message);
// .includes - под капотом возвращает ДА или НЕТ , на вопрос ВХОДИТ?
//есть ли в масивах премитив ,который возвращает ДА или НЕТ(true или false)