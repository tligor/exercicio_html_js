const form = document.getElementById('formulario');
const campoA = document.getElementById('numA');
const campoB = document.getElementById('numB');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if(isNaN(valorA) || isNaN(valorB)){
        alert('Por favor, insira um número válido!');
        return
    }

    if (valorA > valorB){
        alert('O valor do campo A é maior que B')
    }else if (valorA === valorB){
        alert('O valor do campo B é igual A')
    }else{
        alert('O valor do campo B é maior que A')
    }
})