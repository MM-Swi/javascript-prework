/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 2) {
    return 'papier';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "papier".');
    return 'papier';
  }
}

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "nożyce".');
    return 'nożyce';
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove === argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Remis :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

playerMove = buttonName;
console.log('wybór ruchu gracza to: ' + playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);

var buttonTest;

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
}
buttonkamień = document.getElementById('button-kamień');
buttonkamień.addEventListener('click', function(){ buttonClicked('Guzik kamień'); });

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
}
buttonpapier = document.getElementById('button-papier');
buttonpapier.addEventListener('click', function(){ buttonClicked('Guzik papier'); });


function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
}
buttonnożyce = document.getElementById('button-nożyce');
buttonnożyce.addEventListener('click', function(){ buttonClicked('Guzik nożyce'); });





var buttonTest;
// tu będą wymienione pozostałe zmienne guzików, np. buttonRock

buttonTest = document.getElementById('button-test');
// tu będą kolejne linie kodu, w których do zmiennych będą przypisane elementy znalezione po id

function buttonClicked(buttonName){
    clearMessages();
    console.log(buttonName + ' został kliknięty");

    // tu znajdzie się cała dotychczasowa zawartość pliku js/script.js
    // czyli efekt ćwiczenia z poprzedniego submodułu
    // z drobną zmianą dot. zmiennej playerMove (wspomnieliśmy o tym powyżej)
}

buttonTest.addEventListener('click', function(){
    buttonClicked('Test button')
});

// tu będą kolejne powiązania guzików z funkcją buttonClicked
// (każda z innym argumentem)