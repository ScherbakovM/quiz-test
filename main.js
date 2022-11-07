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
    quest: [
    "Что в море является ориентиром для моряка?", 
    "В каком месте располагался пульт управления Карлсоном?",
    "Что на самом деле представляет из себя легендарный зеленый код из «Матрицы ?",
    "Сколько километров в одной миле?",
    "Кого задушил Отелло?",
    "Какое имя было у супруги Пушкина ?",
    "В этом спорте капитаны не принимают участие в игре. В каком?",
    "Каким словом является «топот»?",
    "Именно этот филосов проживал в бочке",
    "Назовите озеро где было ледовое побоище"],
    answerOne: ["Ветер","Кнопка это нос!","Рецепт суши","1,6км", "Гамлета","Наталья", "Водное поло","Палиндром", "Сократ","Ледовое"],
    answerTwo: ["Полярная звезда", "На животе","Рецепт Пад Тая","1,1км","Дездемону","Арина","Тенис","Анацикл","Диоген", "Чудское"]
};

let i = 0;
let count = 0;
            
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

//Финальный текст 

function finalText(argument){
    if(argument >= 7){
        questionsDiv.innerHTML = "Поздравляем!</br>" + "Ты ответил на " + count + " вопросов из 10 </br> ";
        setTimeout(function(load){quizMarkup.appendChild(questionsDiv)});
        }
    else {
        questionsDiv.innerHTML = "&#128529 </br> Потрачено!</br>" + "Ты ответил на "+ count + " вопросов из 10 </br> " + " Попробуй еще!";
        setTimeout(function(load){quizMarkup.appendChild(questionsDiv)});
     }  
}


// Загрузка элементов.

function loadMarkup(arg2){
    arg2.appendChild(answDiv);
    console.log(count);
    const btnControl =  document.getElementById('btnContrl');
    const btnAnswerOne = document.getElementById('AnswerOne');
    const btnAnswerTwo = document.getElementById('AnswerTwo');
    btnAnswerOne.addEventListener('click', () => {
        //Первый вопрос неверный вариант
            if(i <= 0) {
                 i = i + 1;
                 count = count;
                 console.log(count);
                 questionsDiv.innerHTML = questionsArr.quest[i];
                 btnOnecreate.innerHTML = questionsArr.answerOne[i];
                 btnTwocreate.innerHTML = questionsArr.answerTwo[i];
                 return i;
            }
        //Второй вопрос неверный вариант
            if(i <= 1) {
                 count = count;
                 console.log(count);
                 i = i + 1;
                 questionsDiv.innerHTML = questionsArr.quest[i];
                 btnOnecreate.innerHTML = questionsArr.answerOne[i];
                 btnTwocreate.innerHTML = questionsArr.answerTwo[i];
                 return i;
                }

         //Третий вопрос верный вариант 
            if(i <= 2) {
            count = count + 1;
            console.log(count);
            i = i + 1;
            questionsDiv.innerHTML = questionsArr.quest[i];
            btnOnecreate.innerHTML = questionsArr.answerOne[i];
            btnTwocreate.innerHTML = questionsArr.answerTwo[i];
            return i;        
            }

            //Четвертый вопрос верный вариант 
            if(i <= 3) {
                count = count + 1;
                console.log(count);
                i = i + 1;
                questionsDiv.innerHTML = questionsArr.quest[i];
                btnOnecreate.innerHTML = questionsArr.answerOne[i];
                btnTwocreate.innerHTML = questionsArr.answerTwo[i];    
                return i; 
                }

            //Пятый вопрос неверный вариант
            if(i <= 4) {
                count = count;
                console.log(count);
                i = i + 1;
                questionsDiv.innerHTML = questionsArr.quest[i];
                btnOnecreate.innerHTML = questionsArr.answerOne[i];
                btnTwocreate.innerHTML = questionsArr.answerTwo[i];
                return i;
                }

            //Шестой вопрос верный вариант 
            if(i <= 5) {
                count = count + 1;
                console.log(count);
                i = i + 1;
                questionsDiv.innerHTML = questionsArr.quest[i];
                btnOnecreate.innerHTML = questionsArr.answerOne[i];
                btnTwocreate.innerHTML = questionsArr.answerTwo[i];
                return i;
                }

            //Седьмой вопрос неверный вариант
            if(i <= 6) {
                count = count;
                console.log(count);
                i = i + 1;
                questionsDiv.innerHTML = questionsArr.quest[i];
                btnOnecreate.innerHTML = questionsArr.answerOne[i];
                btnTwocreate.innerHTML = questionsArr.answerTwo[i];
                return i;
                }

            //Восьмой вопрос верный вариант 
            if(i <= 7) {
                count = count + 1;
                console.log(count);
                i = i + 1;
                questionsDiv.innerHTML = questionsArr.quest[i];
                btnOnecreate.innerHTML = questionsArr.answerOne[i];
                btnTwocreate.innerHTML = questionsArr.answerTwo[i];
                return i;
                }

            //Девятый вопрос неверный вариант
            if(i <= 8) {
                count = count;
                console.log(count);
                i = i + 1;
                questionsDiv.innerHTML = questionsArr.quest[i];
                btnOnecreate.innerHTML = questionsArr.answerOne[i];
                btnTwocreate.innerHTML = questionsArr.answerTwo[i];
                return i;
                }
            //Последний вопрос неверный вариант
            if(i <= 9) {
                count = count;
                console.log(count);
                clearChild(quizMarkup);
                questionsDiv.id = 'finalText';
                finalText(count);
                }
            
           });
   
     btnAnswerTwo.addEventListener('click',() => {
        //Первый вопрос верный вариант
           if(i <= 0) {
            count = count + 1;
            console.log(count);
            i = i + 1;
            questionsDiv.innerHTML = questionsArr.quest[i];
            btnOnecreate.innerHTML = questionsArr.answerOne[i];
            btnTwocreate.innerHTML = questionsArr.answerTwo[i];
            return i;
           }

        //Второй вопрос верный вариант
           if(i <= 1) {
            count = count + 1;
            console.log(count);
            i = i + 1;
            questionsDiv.innerHTML = questionsArr.quest[i];
            btnOnecreate.innerHTML = questionsArr.answerOne[i];
            btnTwocreate.innerHTML = questionsArr.answerTwo[i];
            return i;
           }

        //Третий вопрос неверный вариант
           if(i <= 2) {
            count = count;
            console.log(count);
            i = i + 1;
            questionsDiv.innerHTML = questionsArr.quest[i];
            btnOnecreate.innerHTML = questionsArr.answerOne[i];
            btnTwocreate.innerHTML = questionsArr.answerTwo[i];
            return i;
            }

            //Четвертый вопрос неверный вариант

           if(i <= 3) {    
            count = count;
            console.log(count);
            i = i + 1;
            questionsDiv.innerHTML = questionsArr.quest[i];
            btnOnecreate.innerHTML = questionsArr.answerOne[i];
            btnTwocreate.innerHTML = questionsArr.answerTwo[i];
            return i;
            }

            //Пятый вопрос верный вариант 
            if(i <= 4) {
                count = count + 1;
                console.log(count);
                i = i + 1;
                questionsDiv.innerHTML = questionsArr.quest[i];
                btnOnecreate.innerHTML = questionsArr.answerOne[i];
                btnTwocreate.innerHTML = questionsArr.answerTwo[i];
                return i;        
                }

            //Шестой вопрос неверный вариант
            if(i <= 5) {       
                count = count;
                console.log(count);
                i = i + 1;
                questionsDiv.innerHTML = questionsArr.quest[i];
                btnOnecreate.innerHTML = questionsArr.answerOne[i];
                btnTwocreate.innerHTML = questionsArr.answerTwo[i];
                return i;
                }

            //Седьмой вопрос верный вариант 
            if(i <= 6) {
                count = count + 1;
                console.log(count);
                i = i + 1;
                questionsDiv.innerHTML = questionsArr.quest[i];
                btnOnecreate.innerHTML = questionsArr.answerOne[i];
                btnTwocreate.innerHTML = questionsArr.answerTwo[i];
                return i;        
                }
            
            //Восьмой вопрос неверный вариант
            if(i <= 7) {       
                count = count;
                console.log(count);
                i = i + 1;
                questionsDiv.innerHTML = questionsArr.quest[i];
                btnOnecreate.innerHTML = questionsArr.answerOne[i];
                btnTwocreate.innerHTML = questionsArr.answerTwo[i];
                return i;
                }
            //Девятый вопрос верный вариант 
            if(i <= 8) {
                count = count + 1;
                console.log(count);
                i = i + 1;
                questionsDiv.innerHTML = questionsArr.quest[i];
                btnOnecreate.innerHTML = questionsArr.answerOne[i];
                btnTwocreate.innerHTML = questionsArr.answerTwo[i];
                return i;        
                }
            //Последний вопрос верный вариант
                if(i <= 9) {
                    count = count + 1;
                    console.log(count);
                    clearChild(quizMarkup);
                    questionsDiv.id = 'finalText';
                    finalText(count);
                    }

     })      
   
    }
    
// действия по клику
// анимация +  очистка разметки + добавление новой разметки.
// Старт КВИЗА
//действия по кнопке 1

btnStart.addEventListener('click', () => {
    
     clearChild(quizMarkup);
     loadMarkup(quizMarkup);
    
});

//действия по кнопке 2

btnRestart.addEventListener('click', () => {
    
    clearChild(quizMarkup);
    loadMarkup(quizMarkup);
       
});   

