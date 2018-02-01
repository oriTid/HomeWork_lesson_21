var Plain = /** @class */ (function () {
    function Plain(pilotname, companyname, destination) {
        this.pilotName = pilotname;
        this.companyName = companyname;
        this.destination = destination;
    }
    Object.defineProperty(Plain.prototype, "pilotName", {
        get: function () {
            return this._pilotName;
        },
        set: function (name) {
            this._pilotName = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plain.prototype, "companyName", {
        get: function () {
            return this._companyName;
        },
        set: function (name) {
            this._companyName = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plain.prototype, "destination", {
        get: function () {
            return this._destination;
        },
        set: function (name) {
            this._destination = name;
        },
        enumerable: true,
        configurable: true
    });
    //////////// mthods /////////
    Plain.prototype.fly = function (speed) {
        if (speed < 0)
            speed = 0;
        document.write("</br>I'm a Plain. My speed is RANDOM and is now " + speed + "</br>");
    };
    Plain.prototype.land = function () {
        return true;
        //else document.write(`Ooops - Crashed BOOOOM !!</br>`);
    };
    return Plain;
}());
//# sourceMappingURL=Plain.js.map