const inputValue = document.getElementById("inputValue");
const result = document.getElementById("result");
const showResult = document.getElementById("showResult");

showResult.addEventListener('click', function(){
    
    let x = inputValue.value;
    let num = parseInt(x);
    result.innerHTML = num.toString(2);

})