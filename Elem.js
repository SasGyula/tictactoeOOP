export class Elem{
    #szuloElem;
    #ertek;
    #divElem
    #id
    constructor(id, ertek,szuloElem){
        this.#szuloElem = szuloElem;
        this.#ertek = ertek
        this.#id = id
        this.#megjelenit()
        // ráattintunk az elemre
        this.#divElem = this.#szuloElem.children("div:last-child")
        //egy osztályban a this egy konkrét objektumpéldány jelenti, de egy eseménykezelőben function névtelen függvénnyel használva, azt a html elemet jelenti amelyik az eseményt kiváltotta(event target), függvényel használva pedig az objektum példányra mutat
        this.#divElem.on("click",()=>{
            console.log(this.#id)
            this.#esemenyTrigger("lepes")
        })
    }

    #megjelenit(){
        let  txt = `<div><p> ${this.#ertek} </p></div>`
        this.#szuloElem.append(txt)
    }

    //információ átadás eseményesetén másik osztálynak
    #esemenyTrigger(esemenyNev){
        //létrehoz egy saját eseményt eseménynév néven és átad adatokat saját magáról{detail: }
        const e = new CustomEvent(esemenyNev, {detail:this.#id})
        window.dispatchEvent(e)
    }

}
