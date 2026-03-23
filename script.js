function calcular(){

let garrafas = document.getElementById("garrafas").value || 0;
let sacolas = document.getElementById("sacolas").value || 0;
let embalagens = document.getElementById("embalagens").value || 0;

let totalSemana = Number(garrafas) + Number(sacolas) + Number(embalagens);
let totalAno = totalSemana * 52;

document.getElementById("resultado").innerText =
"Você utiliza aproximadamente " + totalAno + " itens de plástico por ano.";
}
