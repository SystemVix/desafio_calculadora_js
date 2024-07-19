// Captura do number1
const number1 = document.getElementById("number1");
number1.addEventListener('keyup', handleInputNumberKeyup);

// Captura do number2
const number2 = document.getElementById("number2");
number2.addEventListener('keyup', handleInputNumberKeyup);

// Validação se é numero (Prof. Nélio / StackOverFlow)
function isNumber(numero)
{
   return !isNaN(parseFloat(numero)) && isFinite(numero);   
}

// Validação de number1 e number2
function handleInputNumberKeyup(event)
{
   if (isNumber(event.target.value))
   {
      event.target.classList.remove("input-error");      
   }
   else
   {
      event.target.classList.add("input-error");      
   }
}

// Cálculos

const result = document.getElementById("result-box");

const plus = document.getElementById("btn-plus");
plus.addEventListener('click', handleButtonPlusClick);

const times = document.getElementById("btn-times")
times.addEventListener('click', handleButtonTimesClick);

function handleButtonPlusClick(event)
{
   event.preventDefault();
   result.innerHTML = Number(number1.value) + Number(number2.value);
}

function handleButtonTimesClick(event)
{
   event.preventDefault();
   result.innerHTML = Number(number1.value) * Number(number2.value);
}

// Limpar campos

const clear = document.getElementById("btn-clear");
clear.addEventListener('click', handleButtonClearClick);

function handleButtonClearClick(event)
{
   number1.value = "";
   number1.classList.remove("input-error");
   number2.value = "";
   number2.classList.remove("input-error");
   result.innerHTML = 0;
}




