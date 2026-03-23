function calcular(){

let garrafas = document.getElementById("garrafas").value || 0;
let sacolas = document.getElementById("sacolas").value || 0;
let embalagens = document.getElementById("embalagens").value || 0;

let totalSemana = Number(garrafas) + Number(sacolas) + Number(embalagens);
let totalMes = totalSemana * 4;
let totalAno = totalSemana * 52;

// estimativa média de peso por item plástico
let pesoMedio = 0.02; // 20g por item

let pesoAno = totalAno * pesoMedio;

document.getElementById("resultado").innerHTML =
`
Consumo semanal: ${totalSemana} itens de plástico<br><br>
Consumo mensal: ${totalMes} itens<br><br>
Consumo anual: <b>${totalAno} itens</b><br><br>

Isso pode representar aproximadamente <b>${pesoAno.toFixed(2)} kg de plástico por ano</b>.

<br><br>
Pequenas mudanças no consumo podem reduzir significativamente esse impacto ambiental.
`;

}
