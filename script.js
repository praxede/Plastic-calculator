let grafico;

function calcular(){

let garrafas = document.getElementById("garrafas").value || 0;
let sacolas = document.getElementById("sacolas").value || 0;
let embalagens = document.getElementById("embalagens").value || 0;

let totalSemana = Number(garrafas) + Number(sacolas) + Number(embalagens);
let totalMes = totalSemana * 4;
let totalAno = totalSemana * 52;

let pesoMedio = 0.02; // 20g por item
let pesoAno = totalAno * pesoMedio;

let garrafasEquivalentes = pesoAno / 0.02;

let reducaoSemana = 2;
let economiaAno = reducaoSemana * 52;
let economiaPeso = economiaAno * pesoMedio;

let impactoColetivo = economiaAno * 100;

document.getElementById("resultado").innerHTML =

`
Consumo semanal: ${totalSemana} itens de plástico<br><br>

Consumo mensal: ${totalMes} itens<br><br>

Consumo anual: <b>${totalAno} itens</b><br><br>

Isso pode representar aproximadamente <b>${pesoAno.toFixed(2)} kg de plástico por ano</b>.<br><br>

Equivalente a cerca de <b>${garrafasEquivalentes.toFixed(0)} garrafas PET</b>.<br><br>

<hr><br>

<b>Simulação de redução:</b><br><br>

Se você reduzir apenas <b>2 itens de plástico por semana</b>,
poderá evitar aproximadamente <b>${economiaAno} itens por ano</b>,
o que representa cerca de <b>${economiaPeso.toFixed(2)} kg de plástico a menos no ambiente</b>.<br><br>

<b>Impacto coletivo:</b><br><br>

Se 100 pessoas fizerem essa mesma redução,
aproximadamente <b>${impactoColetivo} itens de plástico</b> deixariam de ser descartados no ambiente todos os anos.
`;

if(grafico){
grafico.destroy();
}

let ctx = document.getElementById('graficoPlastico').getContext('2d');

grafico = new Chart(ctx, {

type: 'bar',

data: {

labels: ['Semanal', 'Mensal', 'Anual'],

datasets: [{

label: 'Consumo estimado de plástico',

data: [totalSemana, totalMes, totalAno]

}]

},

options: {

responsive: true,

plugins: {

title: {

display: true,

text: 'Consumo estimado de plástico'

}

}

}

});

}
