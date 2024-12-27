const valorEconomia = document.querySelector('.valorEconomia') as HTMLInputElement
const receita = document.querySelector('.receita')  as HTMLInputElement
const tempoEconomia= document.querySelector('.tempo')  as HTMLInputElement
const diaMesAno = document.querySelector('.dma') as HTMLInputElement



function resposta(texto:string){
    const resposta = document.querySelector('.resposta') as HTMLElement
    resposta.innerHTML = texto
}
function calculaEconomia(valor:number,receita:number,tempo:number, dma:string){
    console.log("testasdasde");
    
    if(receita === 0 ) return console.log("Sua receita não pode ser 0, hipócrita");
    const valorDeEconomia = valor/tempo
    const TempoDeEconomia = valorDeEconomia / tempo
    resposta(`Voce precisa economizar ${valorDeEconomia.toFixed(2)} no tempo de ${tempo} ${dma} voce precisa guardar ${TempoDeEconomia.toFixed(2)}`);
}

const btn = document.querySelector(".btn")

if(btn){
    btn.addEventListener("click", ()=>{
        console.log("clicado");
        
        if(valorEconomia && receita && tempoEconomia){
            const valor = parseFloat(valorEconomia.value)
            const receitaa = parseFloat(receita.value)
            const tempo = parseFloat(tempoEconomia.value)
            const dma =  diaMesAno.value
            
            if(valor && receitaa && tempo && dma)
             calculaEconomia(valor, receitaa, tempo, dma)
            else return resposta("por favor complete as informações")
        }
    })
}