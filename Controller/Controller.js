import Modell from "../Modell/Modell.js"
import Jatekter from "../View/Jatekter.js"

export default class Controller{
    #JATEKTER
    #MODELL
    constructor(){
        this.#MODELL = new Modell()
        this.#JATEKTER = $(".jatekter")
        new Jatekter(this.#JATEKTER,this.#MODELL.getLista())
        this.#kivEsemenykezelo()
    }
    #kivEsemenykezelo(){
        $(window).on("kivalaszt",(event) => {
            let kivalasztott = event.detail       
            this.#MODELL.setListaErtek(kivalasztott)
            new Jatekter(this.#JATEKTER, this.#MODELL.getLista())
        })
    }

}