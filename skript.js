const inputNumber = document.querySelector('.number');
const formSubmit = document.querySelector('.form');
const outputText = document.querySelector('.output');
const button = document.querySelector('.but');
const buttonTest = document.querySelector('.butTEst');

const array = [];



formSubmit.addEventListener('submit', umberFirstNumber);

function umberFirstNumber(event){
    event.preventDefault();

    const firstNumber = parseInt(inputNumber.value);
    array.push(firstNumber);
    inputNumber.value = ''
    inputNumber.focus()

    if(array.length == 2){
        divideNumber()
    }
}

function divideNumber(){
    const numberArray = `<p>Ваши числа: ${array[0]} / ${array[1]} </p>
    <button type="submit" class="button">Делиться без остатка?</button>
    `
    formSubmit.innerHTML = numberArray
    const buttonRez = document.querySelector('.button')
    buttonRez.addEventListener('click', divideNumber);

   const divide = array[0] % array[1];
   if (divide == 0){
        outputText.innerHTML = `<p>Ваши числа деляться без остатка </p>`
   }else{
        outputText.innerHTML = `<p>Ваши числа деляться c остатком ${divide} </p>`
   }

   buttonRez.innerText = 'Обновить';
   buttonRez.onclick = () => history.go()
}



