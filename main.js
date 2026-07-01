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

    // Calcula a média final
    const mediaFinal = (n1 + n2) / 2;

    // Reseta a cor para preto/padrão do esboço
    divResultado.style.color = "#000000"; 
    
    // Cria a estrutura que vai segurar as duas linhas (Média e Situação)
    let htmlResultado = `<p>A média do aluno é: ${mediaFinal.toFixed(1)}</p>`;

    // Verifica se passou (exemplo usando média maior ou igual a 6)
    if (mediaFinal >= 6) {
        htmlResultado += `<p>Situação: pabens paso <img src="img/cachorropirulito.jpg" alt="Cachorro de chapéu"></p>`;
    } else {
        htmlResultado += `<p>Situação: nao paso beta moggado <img src="img/betamoggado.png" alt="Meme reprovado"></p>`;
    }

    // Joga tudo para dentro da div de resultado de uma vez só
    divResultado.innerHTML = htmlResultado;
});