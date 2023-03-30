var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }
    return Animal;
}());
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal(name, age, sound) {
        if (sound === void 0) { sound = 'roar'; }
        return _super.call(this, name, age, sound) || this;
    }
    Mammal.prototype.makeSound = function () {
        console.log("".concat(this.name, " (").concat(this.age, " years old) makes a ").concat(this.sound, " sound."));
    };
    return Mammal;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, age, sound) {
        if (sound === void 0) { sound = 'chirp'; }
        return _super.call(this, name, age, sound) || this;
    }
    Bird.prototype.makeSound = function () {
        console.log("".concat(this.name, " (").concat(this.age, " years old) makes a ").concat(this.sound, " sound."));
    };
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, age, sound) {
        if (sound === void 0) { sound = 'blub'; }
        return _super.call(this, name, age, sound) || this;
    }
    Fish.prototype.makeSound = function () {
        console.log("".concat(this.name, " (").concat(this.age, " years old) makes a ").concat(this.sound, " sound."));
    };
    return Fish;
}(Animal));
// Example usage
var lion = new Mammal('Lion', 5);
var sparrow = new Bird('Sparrow', 2);
var goldfish = new Fish('Goldfish', 1);
lion.makeSound(); // Lion (5 years old) makes a roar sound.
sparrow.makeSound(); // Sparrow (2 years old) makes a chirp sound.
goldfish.makeSound(); // Goldfish (1 years old) makes a blub sound.
