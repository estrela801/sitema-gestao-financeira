"use strict";
const clicked = (parameter, tipoEvento) => {
    document.addEventListener(tipoEvento, () => {
        const economiaElement = document.querySelector('.eco-max');
        if (economiaElement) {
            const economia = parseFloat(economiaElement.value);
            console.log("Valor encontrado", economia);
        }
        else {
            console.log('o valor de economia nao existe');
        }
    });
};
const btn = document.querySelector('.btn');
if (btn)
    clicked(btn, "click");
else
    console.log('btn nao encontrado');
