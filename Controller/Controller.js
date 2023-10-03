import Modell from "../Modell/Modell.js";
import JatekTerView from "../View/JatekTerView.js";

class Controller{
    constructor(){
        this.MODELL = new Modell();
        this.VIEW = new JatekTerView($(".palya"));
        $(window).on("kitolt",(event)=>{
            console.log(event.detail)
            this.MODELL.setLatszik(event.detail.getLatszik());
            event.detail.setErtek(this.MODELL.getLatszik());
           console.log(this.MODELL.vegeVanE());
        })
    }
}

export default Controller;