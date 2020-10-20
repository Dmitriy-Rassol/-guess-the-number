'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function getAnswer(random) {
    let userNumber = prompt('Угадай число от 1 до 100'); // ввод числа
    console.log(userNumber);

    function getChoice(random) {
        if (confirm('Продолжить')) {
            getAnswer(random);
        }
    }

    if (!isNumber(userNumber)) {
        alert('Введи число!');
        getChoice(random);
    } else if (userNumber < 1 || userNumber > 100) {
        alert('Введите число в диапазоне от 1 до 100');
        getChoice(random);
    } else if (userNumber > random) {
        alert('Загаданное число меньше');
        getChoice(random);
    } else if (userNumber < random) {
        alert('Загаданное число больше');
        getChoice(random);
    } else {
        alert('Поздравляю, Вы угадали!!!');
        if (confirm('Начать новую игру?')) {
            getNumber();
        }
    }    
}


function getNumber() {
    let targetNumber = parseInt(Math.random()*100); // генерируем число
    console.log(targetNumber);
    getAnswer(targetNumber);    
}

getNumber();