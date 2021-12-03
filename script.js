const inputValue = document.getElementById("inputValue");
const result = document.getElementById("result");
const showResult = document.getElementById("showResult");

// Verificando com RegExp se aquele número digitado pelo usuário equivale a base númerica de sua escolha
function numCheck(num, pattern, index) {

    for(let i = 0; i <= num.length - 1; i++){
        
        let check = pattern.test(num[i]);

        if(check == false){
            result.innerHTML = "Invalid number";
            alert("Insert only binary numer: 0 and 1")
            break;
        } else {
            result.innerHTML = parseInt(num, index)
        }
    } 

}

// Chamando a função de verificação dentro do evento de click para assim converter apenas se retornar true
showResult.addEventListener('click', function(){
    
    let number = inputValue.value;
    let pat = /[0-1]/;
    let ind = 2;
    numCheck(number, pat, ind);

})
