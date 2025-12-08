// Покраска всех карточек

const productCards = document.querySelectorAll('.card-container');
const changeColorAllCardButton = document.querySelector('#chenge-color-all-card');
const greenColorHash = '#a0cea0ff';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

// Покраска первой карточки

const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#chenge-color-first-card');
const blueColorHash = '#8b9bccff';

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
})

// Открыть Google

const openGoogleButton =document.querySelector('#open-google');
openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer == true) {
    window.open('https://google.com')
  }
}

// Вывести в консоль лог и alert

const outputLogButton = document.querySelector('#output-console-log');
outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'));

function outputConsoleLog(massage) {
  alert(massage)
  console.log(massage)
}

// Вывод названия в лог при наведении мыши

const titleLog = document.querySelector('.title')

titleLog.addEventListener('mouseenter', () => {
  console.log(titleLog.textContent);
});

//Кнопка меняющая цвет с одного на другой

const colorButton = document.getElementById('change-color-button');

colorButton.addEventListener('click', () => {
  colorButton.classList.toggle('active-color');

  if (!colorButton.classList.contains('active-color')) {
    colorButton.style.backgroundColor = '#db990bff';
  } else {
    colorButton.style.backgroundColor = '#1da9c5ff';
  }
});