class Plain implements IFly {

    private _pilotName: string;
    private _companyName: string;
    private _destination: string;

    constructor(pilotname: string, companyname: string, destination: string) {

        this.pilotName = pilotname;
        this.companyName = companyname;
        this.destination = destination;
    }

    get pilotName(): string {
        return this._pilotName;
    }

    set pilotName(name: string) {
        this._pilotName = name;
    }

    get companyName(): string {
        return this._companyName;
    }

    set companyName(name: string) {
        this._companyName = name;
    }

    get destination(): string {
        return this._destination;
    }

    set destination(name: string) {
        this._destination = name;
    }




    //////////// mthods /////////

    fly(speed: number): void {
        if (speed< 0) 
            speed = 0;
        
        document.write(`</br>I'm a Plain. My speed is RANDOM and is now ${speed}</br>`);
    }


    land(): boolean {


        return true;
        //else document.write(`Ooops - Crashed BOOOOM !!</br>`);

    }
}