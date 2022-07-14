/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join() - сшивает разделители масива через произвонльный символ,который задашь
 */

//Метод №1
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';
// for(const friend of friends){
//     string += friend + ',';
// }
// string = string.slice(0, string.length - 1);
// console.log(string);
// Должно получится 'Mango,Poly,Kiwi,Ajax'

//Метод №2
const string = friends.join(', ');
console.log(string);

