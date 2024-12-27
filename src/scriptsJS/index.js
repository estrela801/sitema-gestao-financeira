"use strict";
const valorEconomia = document.querySelector('.valorEconomia');
const receita = document.querySelector('.receita');
const tempoEconomia = document.querySelector('.tempo');
const diaMesAno = document.querySelector('.dma');
function resposta(texto) {
    const elementOld = document.querySelector('.resposta');
    const fatherOld = document.querySelector('.novo');
    if (elementOld) {
        elementOld.remove();
        if (fatherOld)
            fatherOld.remove();
    }
    else {
        console.log('ja existe');
        const section = document.createElement('section');
        section.classList.add('main-elements');
        section.classList.add('novo');
        const resposta = document.createElement('div');
        resposta.classList.add('resposta');
        resposta.innerHTML = texto;
        section.appendChild(resposta);
        document.body.append(section);
    }
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
