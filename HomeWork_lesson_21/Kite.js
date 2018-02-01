var Kite = /** @class */ (function () {
    function Kite(color, price) {
        this.color = color;
        this.price = price;
    }
    Object.defineProperty(Kite.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kite.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            if (price > 0) {
                this._price = price;
            }
            else
                this.price = 50;
        },
        enumerable: true,
        configurable: true
    });
    //////////// mthods /////////
    Kite.prototype.fly = function (speed) {
        if (speed < 0)
            speed = 0;
        document.write("</br>I'm a Kite. My speed is RANDOM and is now " + speed + "</br>");
    };
    Kite.prototype.land = function () {
        return true;
        //else document.write(`Ooops - Crashed BOOOOM !!</br>`);
    };
    return Kite;
}());
//# sourceMappingURL=Kite.js.map