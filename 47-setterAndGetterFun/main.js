// getter and setter 
// ye predifiend function hai class ka 
var test = /** @class */ (function () {
    function test() {
        this._name = "bilal";
    }
    Object.defineProperty(test.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(test.prototype, "name1", {
        set: function (val) {
            this._name = val;
        },
        enumerable: false,
        configurable: true
    });
    return test;
}());
var a = new test();
console.log(a.name);
a.name1 = "shaukat";
console.log(a.name1);
