class main {

    constructor(a: string, b: number) { 
        console.log(`${a} tenho ${b} anos`); 
    }
    teste(){
        console.log("Ta bom, to pegando o jeito de trabalhar com POO");
        
    }
    putTextInAElement(classElement: string, text:string){
        const element = document.body.querySelector(classElement)
        if(element){
            element.innerHTML = text 
        }
        else console.log('elemento não encontrado');
        
        
    }
    getElementOnBodyByClassAndDoSomething(element:string, size:string){
        const elements = document.getElementsByClassName(element)
       
    }
    getAElementAndMultiplyit(element:string, text:string){
        const g = document.createElement("div")
        g.classList.add(element)
        g.innerHTML = text
        document.body.append(g)
    }
}
const instancia = new main("eu", 17)
instancia.teste()
instancia.putTextInAElement(".root","AAAAAAAAAAAA")
instancia.getAElementAndMultiplyit("root", "texto generico")