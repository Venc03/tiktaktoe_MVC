class View{
    constructor(szuloElem){
        this.szuloElem=szuloElem;
        this.#index = index;
        this.#allapot = true;
        this.#htmlOsszerak();
        this.kockaToltElem=$(".kitolt");
        this.pElem = this.kockaToltElem.children("p");


        this.kockaToltElem.on("click",()=>{
            if(this.#allapot){
                this.#sajatEsemenykezelo("kitolt");
                this.#allapot = false;
            }
        })
    }  



    getIndex(){
        return this.#index
    }



    setErtek(jel){
        this.pElem.html(jel);
    }



    #sajatEsemenykezelo(esemenynev){
        console.log(esemenynev)
        const esemenyem = new CustomEvent(esemenynev, { detail: this })
        window.dispatchEvent(esemenyem)
    }


    
    #htmlOsszerak(){
        let txt="<div class='kitolt'><p></p></div>"
        this.szuloElem.append(txt);
    }
}

export default View;