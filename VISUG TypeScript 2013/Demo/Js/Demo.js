var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Object.defineProperty(Animal.prototype, "sound", {
        get: function () {
            return "Bark";
        },
        enumerable: true,
        configurable: true
    });
    return Animal;
})();
var a = new Animal("Dog");
var SuperAnimal = (function (_super) {
    __extends(SuperAnimal, _super);
    function SuperAnimal(name) {
        _super.call(this, name);
    }
    return SuperAnimal;
})(Animal);
