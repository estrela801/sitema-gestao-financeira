"use strict";
const valorEconomia = document.querySelector('.valorEconomia');
const receita = document.querySelector('.receita');
const tempoEconomia = document.querySelector('.tempo');
const diaMesAno = document.querySelector('.dma');
function resposta(texto) {
    const resposta = document.querySelector('.resposta');
    resposta.innerHTML = texto;
}
function calculaEconomia(valor, receita, tempo, dma) {
    console.log("testasdasde");
    if (receita === 0)
        return console.log("Sua receita não pode ser 0, hipócrita");
    const valorDeEconomia = valor / tempo;
    const TempoDeEconomia = valorDeEconomia / tempo;
    resposta(`Voce precisa economizar ${valorDeEconomia.toFixed(2)} no tempo de ${tempo} ${dma} voce precisa guardar ${TempoDeEconomia.toFixed(2)}`);
}
const btn = document.querySelector(".btn");
if (btn) {
    btn.addEventListener("click", () => {
        console.log("clicado");
        if (valorEconomia && receita && tempoEconomia) {
            const valor = parseFloat(valorEconomia.value);
            const receitaa = parseFloat(receita.value);
            const tempo = parseFloat(tempoEconomia.value);
            const dma = diaMesAno.value;
            if (valor && receitaa && tempo && dma)
                calculaEconomia(valor, receitaa, tempo, dma);
            else
                return resposta("por favor complete as informações");
        }
    });
}
