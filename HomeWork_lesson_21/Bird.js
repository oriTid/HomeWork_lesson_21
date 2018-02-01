var Bird = /** @class */ (function () {
    function Bird(birdtype, birdage, birdcolor) {
        this.birdType = birdtype;
        this.birdAge = birdage;
        this.birdColor = birdcolor;
    }
    Object.defineProperty(Bird.prototype, "birdType", {
        get: function () {
            return this._birdType;
        },
        set: function (name) {
            this._birdType = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bird.prototype, "birdAge", {
        get: function () {
            return this._birdAge;
        },
        set: function (age) {
            if (age > 0) {
                this._birdAge = age;
            }
            else
                this._birdAge = 5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bird.prototype, "birdColor", {
        get: function () {
            return this._birdColor;
        },
        set: function (color) {
            this._birdColor = color;
        },
        enumerable: true,
        configurable: true
    });
    //////////// mthods /////////
    Bird.prototype.fly = function (speed) {
        if (speed < 0)
            speed = 0;
        document.write("</br>I'm a Bird. My speed is RANDOM and is now " + speed + "</br>");
    };
    Bird.prototype.land = function () {
        return true;
        //else document.write(`Ooops - Crashed BOOOOM !!</br>`);
    };
    return Bird;
}());
//# sourceMappingURL=Bird.js.map