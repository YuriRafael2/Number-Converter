const inputValue = document.getElementById("inputValue");
const result = document.getElementById("result");
const showResult = document.getElementById("showResult");

showResult.addEventListener('click', function(){

    let num = inputValue.value;
    result.innerHTML = parseInt(num, 8);

})