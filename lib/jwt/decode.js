"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = require("../error/errors");
function decode(token, key) {
    try {
        const result = jsonwebtoken_1.default.verify(token, key);
        if (typeof result === 'string') {
            throw result;
        }
        return result;
    }
    catch (error) {
        throw new errors_1.ForbiddenError(error.message);
    }
}
exports.decode = decode;
//# sourceMappingURL=decode.js.map