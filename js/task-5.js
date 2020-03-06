"use strict";

// const isEqual = function(a, b) {
//   return a === b;
// };

// console.log(isEqual(5, 2));
// console.log(isEqual(5, 5));

// Напиши функцию checkForSpam(message), принимающую 1 параметр
// message - строку. Функция проверяет ее на содержание слов
// spam и sale. Если нашли зарещенное слово то функция возвращает
//  true, если запрещенных слов нет функция возвращает false.
//  Слова в строке могут быть в произвольном регистре.

const checkForSpam = function(message) {
  const copyOfArray = message;

  const words = message.toLowerCase();
  const word = "sale";
  const wordd = "spam";
  const indexOfSale2 = words.includes(word);
  const indexOfSale = words.includes(wordd);
  //   console.log(copyOfArray, indexOfSale, indexOfSale2);

  if (indexOfSale || indexOfSale2) {
    return console.log(copyOfArray + true);
  } else {
    return console.log(copyOfArray + false);
  }
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
