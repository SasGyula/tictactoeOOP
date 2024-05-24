import { Elem } from "./Elem.js";
export class JatekTer{
    #korszamlalo = 0;
    #lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    constructor(){
        this.#megjelenit()

        //feliratkozik a lépés nevű eseményre
        $(window).on("lepes",(event) =>{
            let id = event.detail
            this.#lep(id)
        })
    }
    #megjelenit(){
        const jatekter = $(".jatekter")
        jatekter.empty();
        this.#lista.forEach((ertek, index) =>{   
            let elem = new Elem(index, ertek, jatekter)
        })
    }
    #lep(id) {
        if(this.#korszamlalo % 2 === 0){
            this.#lista[id]="X"
        }else{
            this.#lista[id]="O"
        }
        this.#korszamlalo++;
        this.#megjelenit();
    }
}