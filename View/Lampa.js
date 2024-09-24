export default class Lampa {
  #szuloElem;
  #index;
  #allapot;

  constructor(szuloElem, index, allapot) {
    this.#szuloElem = szuloElem;
    this.#index = index;
    this.#allapot = allapot;
    this.mezoMegjelenit();
    this.lampa = $(".lampa:last");

    
    this.esemenyKezelo();
  }
  mezoMegjelenit() {
    let classNev = "lampa";
    let txt = `
        <div class= "${classNev} ${this.allapotKezelo()}"></div>`;
    this.#szuloElem.append(txt);
  }
  allapotKezelo() {
    console.log(this.#allapot);
    
    if (this.#allapot === true) {
      return "fel";
    }else{
        return ""
    }
  }
  esemenyKezelo() {
    this.lampa.on("click", (event) => {  
         console.log(event.target,this.#index);
      const e = new CustomEvent("kivalaszt", {
        detail: this.#index,
      });
      window.dispatchEvent(e);
    });
 
    
  }
}
