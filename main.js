const botao = document.getElementById('btnCalcular');
const campoNota1 = document.getElementById('nota1');
const campoNota2 = document.getElementById('nota2');
const divResultado = document.getElementById('resultado');

botao.addEventListener('click', function() {
    const n1 = parseFloat(campoNota1.value);
    const n2 = parseFloat(campoNota2.value);

    if (isNaN(n1) || isNaN(n2)) {
        divResultado.innerHTML = "Por favor, digite as duas notas primeiro!";
        divResultado.style.color = "red";
        return;
    }

    const mediaFinal = (n1 + n2) / 2;

    divResultado.style.color = "#333";
    divResultado.innerHTML = `A média do aluno é: ${mediaFinal.toFixed(1)}`; 
});
