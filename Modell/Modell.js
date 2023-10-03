class Modell{
    #latszik;
    #list = [];
    #lepes;
    constructor(){
        this.#latszik = "O";
        this.#list = [".",".",".",".",".",".",".",".","."];
        this.#lepes = 0;
    }

    setLatszik(){
        this.#lepes++;
        if(this.#latszik == "O"){
            this.#latszik = "X";
        }else{
            this.#latszik = "O";
        }
        this.#list[index] = this.#latszik;
        console.log(this.#list);
    }

    getLatszik(){
        return this.#latszik;
    }

    vegeVanE(){
        let eredmeny = this.#vizszintesEllenorzes();
        if(eredmeny.indexOf("XXX") > -1){
            return "X Nyert";
        }else if(eredmeny.indexOf("OOO") > -1){
            return "O Nyert";
        }else if(this.#lepes >= 9){
            return "dontetlen";
        }
        return "nincs vége";

    }

    #vizszintesEllenorzes(){
        let vText = "";
        for (let index = 0; index < this.#list.length; index++) {
            vText += this.#list[index];
            if(index % 3 == 2){
                vText += "_";
            }
            
        }

        console.log(vText);
        return vText;
    }
}

export default Modell;