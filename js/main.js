// Captura do number1
const number1 = document.getElementById("number1");
number1.addEventListener('change', handleInputNumber);

// Captura do number2
const number2 = document.getElementById("number2");
number2.addEventListener('change', handleInputNumber);

// Validação se é numero (Prof. Nélio / StackOverFlow)
function isNumber(numero)
{
   return !isNaN(parseFloat(n)) && isFinite(n);
}

// Validação de number1 e number2
function handleInputNumber(event)
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



