"use strict"

const averageScoreResult = document.getElementById('averageScoreResult');
const maxScoreResult = document.getElementById('maxScoreResult');
const minScoreResult = document.getElementById('minScoreResult');
const highestScoreResult = document.getElementById('highestScoreResult');
const negativeScoreResult = document.getElementById('negativeScoreResult');
const assessmentsResult = document.getElementById('assessmentsResult');
const button = document.getElementById('button');



let array = new Array(12).fill(1);
const grades = array.map((x) => x + (Math.floor(Math.random() * 100)));

button.addEventListener('click', function(){
    const initialValue = 0;
    const sum = grades.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    const averageScore = (sum / grades.length).toFixed(1);
    averageScoreResult.textContent = averageScore;

    const maxScore = Math.max(...grades); 
    maxScoreResult.textContent = maxScore;

    const minScore = Math.min(...grades); 
    minScoreResult.textContent = minScore;

    const highestScore = grades.filter(function(value){
        return value >= 60;
    });
    highestScoreResult.textContent = highestScore.length;

    const negativeScore = grades.filter(function(value){
        return value < 60;
    });
    negativeScoreResult.textContent = negativeScore.length;
    
    let copyArray = [...grades];
    const gradesLetter = copyArray.map(function (item) {
        if (item >= 80 && item <=100)
            return item = "A";
        else if (item >= 60 && item <=79)
            return item = "B";
        else if (item >= 40 && item <=59)
            return item = "C";
        else if (item >= 20 && item <=39)
            return item = "D";
        else (item < 20)
            return item = "E";
        });
        assessmentsResult.textContent = gradesLetter.join(', ');
});