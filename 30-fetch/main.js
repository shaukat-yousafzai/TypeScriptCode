// predifined function jo ek promise retrun karta hai 
// fecth ko require api hota hai 
// api kai hai 
// api client our server ke  bej main ek brch hai jo data ko  leane our lejani ka kam karti hai 
//this case we need dat  lena hai
// requir api 
// joson place holder webiste free api 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var _this = this;
var url = "https://jsonplaceholder.typicode.com/posts/1";
// let fetchData = fetch(url).then((r)=>(r.json())).then((data)=>{
//     console.log(data);
// })
// console.log(fetchData) // fetch ka function promise retrun karta hai 
// promise  three state pending resolve and reject 
// promise jab melta hai to hum do method melta hai .then .catch .then ek callback function leta hai .catch bi callback funtion leta hai
// fetchData.then((resolve)=>{
//     console.log(resolve) // no read able q nahi hora hai qk josn prmpt main nahi hai
//     console.log("resolved")
// })
// fetchData.then((resolve)=>{
//         console.log(resolve.json())  // ye khud bi promis return karta hai
//         console.log("resolved")
//     })
//     fetchData.then((resolve)=>{
//         console.log(resolve)  // ye khud bi promis return karta hai
//         console.log("resolved")
//     }).then((r)=>{
//         console.log(r);
//     })
// fetchData.then((re)=>{
//       re.json()
// }).then((o)=>{
//     console.log(o);
// })
// fetchData.then((r)=>r.json()).then((data)=>{
//     console.log(data);
// })
// async await
// requitement promise
// let fun = async()=>{
//    let data = await fetch(url)
//    let resposne = await data.json()
//    console.log(resposne)
//    let ok = "ok"
//    let ye = await ok
//    console.log(ye)
// }
// fun()
// try catch 
// 
var fun = function () { return __awaiter(_this, void 0, void 0, function () {
    var data, resposne, e_1, ok, ye, e_2, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 9, , 10]);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(url)];
            case 2:
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 3:
                resposne = _a.sent();
                console.log(resposne);
                return [3 /*break*/, 5];
            case 4:
                e_1 = _a.sent();
                e_1 = "correct your code await";
                console.log(e_1);
                return [3 /*break*/, 5];
            case 5:
                _a.trys.push([5, 7, , 8]);
                ok = "ok";
                return [4 /*yield*/, ok];
            case 6:
                ye = _a.sent();
                console.log(ye);
                return [3 /*break*/, 8];
            case 7:
                e_2 = _a.sent();
                e_2 = "correct your code ok";
                console.log(e_2);
                return [3 /*break*/, 8];
            case 8: return [3 /*break*/, 10];
            case 9:
                err_1 = _a.sent();
                err_1 = "correct your code";
                console.log(err_1);
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); };
fun();
