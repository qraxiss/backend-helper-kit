"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatter = void 0;
const return_formatter_1 = require("./return-formatter");
function formatter(model) {
    return function (target, name, descriptor) {
        const originalFunction = descriptor.value;
        descriptor.value = function (req, res, next) {
            var _a;
            return __awaiter(this, void 0, void 0, function* () {
                const status = yield originalFunction.call(this, req, res, next);
                if (res) {
                    if (!status || status.continue !== false) {
                        res.json((0, return_formatter_1.returnFormatter)(yield model[name]({
                            query: req === null || req === void 0 ? void 0 : req.query,
                            body: req === null || req === void 0 ? void 0 : req.body,
                            user: (_a = req === null || req === void 0 ? void 0 : req.session) === null || _a === void 0 ? void 0 : _a.user
                        })));
                    }
                    else if (status.next === true) {
                        next();
                    }
                }
            });
        };
        return descriptor;
    };
}
exports.formatter = formatter;
//# sourceMappingURL=formatter.js.map