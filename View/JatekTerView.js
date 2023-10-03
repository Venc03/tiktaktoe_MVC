import View from "./View.js";

class JatekTerView{
    constructor(szuloElem){
        for (let index = 0; index < 9; index++) {
            new View(szuloElem, index);
        }
    }
}

export default JatekTerView;