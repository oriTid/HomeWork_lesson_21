class Kite implements IFly {

    private _color: string;
    private _price: number;


    constructor(color: string, price: number) {

        this.color = color;
        this.price = price;
    }

    get color(): string {
        return this._color;

    }

    set color(color: string) {

        this._color = color;

    }
    

    get price(): number {
        return this._price;
    }

    set price(price: number) {
        if (price > 0) {
            this._price = price;
        }
        else this.price = 50;
    }

    
    //////////// mthods /////////

    fly(speed: number): void {
        if (speed < 0)
            speed = 0;

        document.write(`</br>I'm a Kite. My speed is RANDOM and is now ${speed}</br>`);
    }


    land(): boolean {
        
        return true;
        //else document.write(`Ooops - Crashed BOOOOM !!</br>`);

    }
}