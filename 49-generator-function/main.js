//generator function
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// value generator karta hai dynamically and hard code
// hard code 
// function* gen(){
//     yield "ratan lal"
//     yield "chaman lal"
//     yield "sarmand"
// }
// let autoGen = gen()
// console.log(autoGen.next())
// console.log(autoGen.next())
// dynamically code 
// function* gen(){
//   let num = 1 
//   while (true){
//     yield num++
//   }
// }
// let autoGen = gen()
// console.log(autoGen.next())
// console.log(autoGen.next())
// // inverse number 
// sales inverse number
// trasction number
function gen() {
    var num;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                num = 1;
                _a.label = 1;
            case 1:
                if (!(num < 5)) return [3 /*break*/, 3];
                return [4 /*yield*/, num++];
            case 2:
                _a.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
var autoGen = gen();
console.log(autoGen.next());
console.log(autoGen.next());
console.log(autoGen.next());
console.log(autoGen.next());
console.log(autoGen.next());
console.log(autoGen.next());
console.log(autoGen.next());
