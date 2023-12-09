"use strict"

const averageScoreResult = document.getElementById('averageScoreResult');
const maxScoreResult = document.getElementById('maxScoreResult');
const minScoreResult = document.getElementById('minScoreResult');
const highestScoreResult = document.getElementById('highestScoreResult');
const negativeScoreResult = document.getElementById('negativeScoreResult');
const assessmentsResult = document.getElementById('assessmentsResult');
const button = document.getElementById('button');



let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,];
let grades = array.map((x) => x + (Math.floor(Math.random() * 100) + 1))
console.log(grades);

button.addEventListener('click', function(){

});
// 1. Создайте пустой массив с именем `grades` и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию `Math.random()`.
// 2. Рассчитайте и выведите средний балл студентов, используя методы массивов.
// 3. Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
// 4. Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
// 5. Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
// 6. Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
// 7. Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
//     - Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
//     - Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
//     - Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
//     - Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
//     - Если оценка ниже 20, преобразуйте её в "E"

// Выведите все найденные значения на экран.