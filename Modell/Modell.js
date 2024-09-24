export default class Modell {
  #JATEKTER = [];
  #db;

  constructor() {
    this.#db = 0;
    this.#JATEKTER = [];
    this.#listaGeneral();
    this.#szamlalo();
  }
  #listaGeneral() {
    if (this.#JATEKTER.length<9){
    for (let index = 0; index < 9; index++) {
      let szam = Math.floor(Math.random() * 2);
      if (szam === 0) {
        this.#JATEKTER.push(false);
      } else {
        this.#JATEKTER.push(true);
      }
    }
}
  }
  #szamlalo() {
    for (let index = 0; index < this.#JATEKTER.length; index++) {
      if (this.#JATEKTER[index] === true) {
        this.#db++;
      }
    }
  }
  getLista() {
    return this.#JATEKTER;
  }
  getDB(){
    return this.#db
  }
  setListaErtek(index){
    if (this.#JATEKTER[index]===true){
        this.#JATEKTER[index]=false
        /*if(index===4){
          
        }*/
    }else{
        this.#JATEKTER[index]=true
    }
  }
}
