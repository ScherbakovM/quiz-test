// Находим элементы
// кнопки

const btnStart = document.getElementById('btnNext');
const btnRestart = document.getElementById('btnRestart');


// lottie поздравления
const congratulation = document.getElementById('congratLottie');
// див quiz который будем очищать при нажатии на кнопку
const quizMarkup = document.getElementById('quiz');
// добавление нового контента в див после очистки вопрос и ответы по кнопкам

const questionsArr = {
    quest: ["Что в море является ориентиром для моряка?", 
    "В каком месте располагался пульт управления Карлсоном?",
    "Что на самом деле представляет из себя легендарный зеленый код из «Матрицы ?"],
    answerOne: ["Ветер","Кнопка это нос!","Рецепт суши"],
    answerTwo: ["Полярная звезда", "На животе","Рецепт Пад Тая"]
};

let i = 0;
const count = 1;
            
//основной див в котором будут загружаться вопросы и ответы
const answDiv = document.createElement('div');
answDiv.id = "answerDiv";
//Див с вопросами
const questionsDiv = document.createElement('div');
questionsDiv.id = "questionDiv";
questionsDiv.innerHTML = questionsArr.quest[i];
//Див с кнопками 
const btnDiv =  document.createElement('div');
btnDiv.id = "btnContrl";
//Сами кнопки:
// AnswerOne
const btnOnecreate = document.createElement('button');
btnOnecreate.id = "AnswerOne";
btnOnecreate.innerHTML = questionsArr.answerOne[i];
//AnswerTwo
const btnTwocreate = document.createElement('button');
btnTwocreate.id = "AnswerTwo";
btnTwocreate.innerHTML = questionsArr.answerTwo[i];

btnDiv.appendChild(btnOnecreate);
btnDiv.appendChild(btnTwocreate);

answDiv.appendChild(questionsDiv);
answDiv.append(btnDiv);

// Функции:
     
//Очистить дочерние элементы.

function clearChild(arg){
while(arg.firstChild) {
    arg.removeChild(arg.lastChild)}
}

// Загрузка элементов.

function loadMarkup(arg2){
    arg2.appendChild(answDiv);
    const btnControl =  document.getElementById('btnContrl');
    const btnAnswerOne = document.getElementById('AnswerOne');
    const btnAnswerTwo = document.getElementById('AnswerTwo');
    btnAnswerOne.addEventListener('click', () => {
        //Первый вопрос неверный вариант
            if(i <= 0) {
            i = i;
            alert(' Неверно ! Попробуй еще!')
            return i;
            }
        //Второй вопрос неверный вариант
            if(i <= 1) {
                i = i;
                alert(' Неверно ! Попробуй еще!')
                return i;
                }
         //Третий вопрос верный вариант последний
            if(i <= 2) {
            alert('Ты прав!');
            i = i + 1;
            clearChild(quizMarkup);
            questionsDiv.id = 'finalText';
            questionsDiv.innerHTML = "Quiz пройден! Поздравляем!"
            setTimeout(function(load){quizMarkup.appendChild(questionsDiv)});
            
            return i;

            }
            
           });
   
     btnAnswerTwo.addEventListener('click',() => {
        //Первый вопрос верный вариант
           if(i <= 0) {
            alert('Ты прав!');
            i = i + 1;
            questionsDiv.innerHTML = questionsArr.quest[i];
            btnOnecreate.innerHTML = questionsArr.answerOne[i];
            btnTwocreate.innerHTML = questionsArr.answerTwo[i];
            return i;
           }
        //Второй вопрос верный вариант
           if(i <= 1) {
            alert('Ты прав!');
            i = i + 1;
            questionsDiv.innerHTML = questionsArr.quest[i];
            btnOnecreate.innerHTML = questionsArr.answerOne[i];
            btnTwocreate.innerHTML = questionsArr.answerTwo[i];
            return i;
           }
        //Третий вопрос неверный вариант
           if(i <= 2) {
            i = i;
            alert(' Неверно ! Попробуй еще!')
            return i;
            }


     })      
   
    }
    
// действия по клику
// анимация +  очистка разметки + добавление новой разметки.
// Старт КВИЗА
//действия по кнопке 1

btnStart.addEventListener('click', () => {
    
     setTimeout(function(clear){clearChild(quizMarkup)},1000);
     setTimeout(function(load){loadMarkup(quizMarkup)}, 1500);
    
});

//действия по кнопке 2

btnRestart.addEventListener('click', () => {
    
    setTimeout(function(clear){clearChild(quizMarkup)},1000);
    setTimeout(function(load){loadMarkup(quizMarkup)}, 1500);
       
});   