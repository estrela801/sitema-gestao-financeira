const clicked = (parameter:HTMLElement, tipoEvento:string)=>{
    document.addEventListener(tipoEvento, ()=>{
        const economiaElement = document.querySelector('.eco-max') as HTMLInputElement
        if(economiaElement){
            const economia:Number = parseFloat(economiaElement.value)
            console.log("Valor encontrado", economia);
            
        }else{
            console.log('o valor de economia nao existe');  
        }
    })
}
const btn = document.querySelector('.btn') as HTMLElement
if(btn)
clicked(btn, "click")
else
console.log('btn nao encontrado');
