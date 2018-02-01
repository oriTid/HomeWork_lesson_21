let arr: Array<IFly> = new Array<IFly>(10);

initArray(arr);
callObjects(arr);

///////////// Functions///////////////

function createIFly(): IFly {
    let rnd: number = random(0, 3);
    switch (rnd) {
        case 0: return new Bird("Water Bird", random(1, 25), "Yellow");
        case 1: return new Plain("Ori the mad Pilot", "Air Dubai", "Taiwan");
        case 2: return new Kite("Blue", random(5, 120));

    }
}

function initArray(arr: Array<IFly>): void {

    for (let i = 0; i < arr.length; i++) {

        arr[i] = createIFly();
    }
}


function callObjects(arr: Array<IFly>): void {

    for (let i = 0; i < arr.length; i++) {
        arr[i].fly(random(5, 120));
        if (arr[i].land())
            document.write(`Landed OK !! (But hey...Im a boolean that returns TRUE all the time... :)</br></br>`);
        else
            document.write(`Oh no, I crashed ';,,;' !!</br>`);

        if (arr[i] instanceof Bird) {
            document.write(` Bird's type is: ${(arr[i] as Bird).birdType}</br>`);
            document.write(` Bird's color is: ${(arr[i] as Bird).birdColor}</br>`);
            document.write(` Bird's RANDOM age is: ${(arr[i] as Bird).birdAge}</br>`);
        }

        else if (arr[i] instanceof Kite) {
            document.write(` Kite's RANDOM price is: ${(arr[i] as Kite).price}</br>`);
            document.write(` Kite's color is: ${(arr[i] as Kite).color}</br>`);
        }
        else if (arr[i] instanceof Plain) {
            document.write(` Plain's Pilot is: ${(arr[i] as Plain).pilotName}</br>`);
            document.write(` Plain's company is: ${(arr[i] as Plain).companyName} </br>`);
            document.write(` Plain's destination is: ${(arr[i] as Plain).destination}</br>`);
        }
    }
}





function random(min: number, max: number): number {
    let r: number = (Math.random() * (max - min)) + min;
    return Math.floor(r);
}
