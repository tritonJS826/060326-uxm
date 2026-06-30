// 1. какие элементы участвуют? 
// кнопка id button
// subtitle counter id counter
const button = document.getElementById("button");
// const button = document.getElementById("counter");
const counter = document.querySelector(".counter-css");
// const            - коробка
// counter          - просто название коробки - дальше буду пользоваться
// document         - наш весь документ с элементами html
// .                - что-то (метод, значение) внутри
// querySelector    - название того что хотим внутри document найти - поиск по css selector    
// (...)            - execute - исполняй
// ".counter-css"   - параметр (селектор css)

const happyCounterString = "i am counter"

console.log("Сейчас у нас:" + counter.innerHTML)



// 2. какой триггер?
// клик на кнопку
button.addEventListener('click', updateCounter);

// 3. какая функция автоматизация
// при нажатии на кнопку меняется номер
function updateCounter() {
    // найти число
    const currentCounterValue = Number(counter.innerHTML);
    console.log("Сейчас: " + currentCounterValue);

    // посчитать какое следующее
    const updatedCounterValue = currentCounterValue + 1;
    console.log("после математики: " + updatedCounterValue);

    // обновить counter
    counter.innerHTML = "hello <br/> <strong>hi</strong> <br/>";
}