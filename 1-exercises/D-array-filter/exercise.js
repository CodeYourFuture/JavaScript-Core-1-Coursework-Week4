/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 11 to produce an array with valid content
  - Do not edit any of the existing code
  ------------Вам предоставляется программа, которая регистрирует пары между наставниками и учениками.
   Это не удается, потому что массив `pairsById` может содержать разные значения, которые нарушают работу программы.
   Решено, что элементы массива, которые не являются парами, должны быть отфильтрованы.
   - Завершите оператор в строке 11, чтобы создать массив с допустимым содержимым.
   - Не редактируйте любой существующий код
*/

let pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"];

let pairsByIndex = pairsByIndexRaw.filter((element) => Array.isArray(element) && element.length === 2 ); // Complete this statement
console.log(pairsByIndex);

let students = ["Islam", "Lesley", "Harun", "Rukmini"];
let mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

let pairs = pairsByIndex.map(function (indexes) {
  let student = students[indexes[0]];
  let mentor = mentors[indexes[1]];
  return [student, mentor];
});
console.log(pairsByIndexRaw);
console.log(pairs);


/* EXPECTED RESULT
-------------------------------
  [ [ 'Islam', 'Luke' ], [ 'Lesley', 'Mozafar' ], [ 'Harun', 'Irina' ] ]
*/