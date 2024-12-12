// public private protected 
// reserve keyword of classes
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
var user = /** @class */ (function () {
    function user() {
    }
    user.prototype.getuder = function () {
        return this.name;
    };
    return user;
}());
var userInfo = /** @class */ (function (_super) {
    __extends(userInfo, _super);
    function userInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.age = 40;
        return _this;
    }
    userInfo.prototype.setUserName = function () {
        // return this.name = "tehsin" // this private this is only access orginal class
        return this.name = "tehsin"; //why access beause now protected
    };
    return userInfo;
}(user));
var obj = new user();
var obj1 = new userInfo();
console.log(obj.getuder());
// console.log(obj1.setUserName())
