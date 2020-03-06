"use strict";
let input;

const numbers = [];

console.log(numbers);
let total = 0;
while (input !== null) {
  input = prompt("Введи число");
  const isNumber = Number(input);
  console.log(isNumber);
  if (Number.isNaN(isNumber)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  numbers.push(isNumber);
  console.log(numbers);
}

for (const num of numbers) {
  console.log(num);
  total = total + num;
}
alert(`Общая сумма чисел равна ${total}`);

//     numbers.push(input);
//     console.log(numbers);
//   } else
