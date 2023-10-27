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
exports.deleteId = void 0;
function deleteId(target, name, descriptor) {
    const originalFunction = descriptor.value;
    descriptor.value = function (params) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield originalFunction.call(this, params);
            if (Array.isArray(result)) {
                result.forEach((item) => {
                    delete item._id;
                });
            }
            else {
                delete result._id;
            }
            return result;
        });
    };
    return descriptor;
}
exports.deleteId = deleteId;
//# sourceMappingURL=delete-id.js.map