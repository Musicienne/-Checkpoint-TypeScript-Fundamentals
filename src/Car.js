var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.start = function () {
            console.log("[Engine Started] ");
        };
        this.make = make;
        this.model = model;
        this.year = year;
    }
    return Car;
}());
var fordMustang = new Car("United States", "Ford Mustang", 1969);
console.log(fordMustang);
