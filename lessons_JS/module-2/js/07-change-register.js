/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 * string.split - разьивает строку по разделителю
 */

// Вариант №1

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';
// console.log(letters);

// for(const letter of letters){
//   console.log(letter);

//   if(letter === letter.toLocaleLowerCase()){
//     console.log('Это буква в нижнем регистре!!', letter);

//     invertedString += letter.toUpperCase();
//   }else{
//     invertedString += letter.toLowerCase();
//   }
// }
// console.log(invertedString);

// Вариант №2
const string = 'JavaScript';
const letters = string.split('');
let invertedString = '';

for (const letter of letters) {
  console.log(letter);

  invertedString += 
  letter === letter.toLowerCase()
   ? letter.toUpperCase()
   : letter.toLowerCase();
}
console.log('invertedString: ', invertedString);
