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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.avalidator = void 0;
const validate_1 = require("./validate");
const joi_1 = __importDefault(require("joi"));
function avalidator(inputTypes, outputTypes, config) {
    return function (target, name, descriptor) {
        const originalFunction = descriptor.value;
        var inputValidator = inputTypes[name] || joi_1.default.any();
        var outputValidator = outputTypes[name] || joi_1.default.any();
        if (config.ENV === 'development') {
            descriptor.value = function (params) {
                return __awaiter(this, void 0, void 0, function* () {
                    let value = (0, validate_1.validate)(params, inputValidator);
                    const result = yield originalFunction.call(this, value);
                    return (0, validate_1.validate)(result, outputValidator);
                });
            };
        }
        else if (config.ENV === 'production') {
            descriptor.value = function (params) {
                return __awaiter(this, void 0, void 0, function* () {
                    let value = (0, validate_1.validate)(params, inputValidator);
                    return yield originalFunction.call(this, value);
                });
            };
        }
        return descriptor;
    };
}
exports.avalidator = avalidator;
//# sourceMappingURL=decorator.js.map