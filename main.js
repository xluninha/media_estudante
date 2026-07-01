// Seleciona o botão e a caixa onde o resultado vai aparecer
const btnCalcular = document.getElementById('btnCalcular');
const resultadoDiv = document.getElementById('resultado');

btnCalcular.addEventListener('click', function() {
    // Captura os valores dos inputs e converte para números decimais (float)
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    // Validação simples: verifica se todos os campos foram preenchidos
    if (isNaN(nota1) || !nota2 || isNaN(nota3)) {
        resultadoDiv.className = "resultado-box reprovado";
        resultadoDiv.innerHTML = "Por favor, preencha todas as notas corretamente.";
        return;
    }

    // Calcula a média das três notas
    const media = (nota1 + nota2 + nota3) / 3;

    // Remove a classe 'hidden' para mostrar a div de resultado
    resultadoDiv.classList.remove('hidden');

    // Define se foi aprovado ou reprovado (Média para passar: 7.0)
    if (media >= 7) {
        resultadoDiv.className = "resultado-box aprovado";
        resultadoDiv.innerHTML = `Média: ${media.toFixed(1)} <br> 🎉 Parabéns! Você foi Aprovado(a)!`;
    } else {
        resultadoDiv.className = "resultado-box reprovado";
        resultadoDiv.innerHTML = `Média: ${media.toFixed(1)} <br> ❌ Ih, ficou de recuperação/reprovado.`;
    }
});
