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
exports.handler = exports.aWsHandler = exports.ahandler = void 0;
function ahandler(target, name, descriptor) {
    const originalFunction = descriptor.value;
    descriptor.value = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield originalFunction.call(this, req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    };
    return descriptor;
}
exports.ahandler = ahandler;
function aWsHandler(target, name, descriptor) {
    const originalFunction = descriptor.value;
    descriptor.value = function (ws, req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield originalFunction.call(this, ws, req);
            }
            catch (error) {
                ws.send(JSON.stringify({ error }));
            }
        });
    };
}
exports.aWsHandler = aWsHandler;
function handler(target, name, descriptor) {
    const originalFunction = descriptor.value;
    descriptor.value = function (req, res, next) {
        try {
            originalFunction.call(this, req, res, next);
        }
        catch (error) {
            next(error);
        }
    };
    return descriptor;
}
exports.handler = handler;
//# sourceMappingURL=handle.js.map