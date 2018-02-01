class Bird implements IFly {

    private _birdType: string;
    private _birdAge: number;
    private _birdColor: string;

    constructor(birdtype: string, birdage: number, birdcolor: string) {

        this.birdType = birdtype;
        this.birdAge = birdage;
        this.birdColor = birdcolor;
    }

    get birdType(): string {
        return this._birdType;
    }

    set birdType(name: string) {
        this._birdType = name;
    }

    get birdAge(): number {
        return this._birdAge;
    }

    set birdAge(age: number) {
        if (age > 0) {
            this._birdAge = age;
        }
        else this._birdAge = 5;
    }

    get birdColor(): string {
        return this._birdColor;
    }

    set birdColor(color: string) {
        this._birdColor = color;
    }




    //////////// mthods /////////

    fly(speed: number): void {
        if (speed < 0)
            speed = 0;
        document.write(`</br>I'm a Bird. My speed is RANDOM and is now ${speed}</br>`);
    }


    land(): boolean {

        return true;
        //else document.write(`Ooops - Crashed BOOOOM !!</br>`);

    }
}