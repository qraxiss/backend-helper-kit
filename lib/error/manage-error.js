"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHelper = void 0;
const errors_1 = require("./errors");
function acknowledged() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            var _a;
            if (((_a = args[0]) === null || _a === void 0 ? void 0 : _a.acknowledged) === false) {
                throw new errors_1.DatabaseError(`Something went wrong with database!`);
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
function getModelName(filename) {
    var _a;
    return (_a = filename
        .split(/(\\|\/)/g)
        .pop()) === null || _a === void 0 ? void 0 : _a.replace('.ts', '');
}
class ErrorHelper {
    constructor(modelName) {
        var name = modelName;
        this.modelName = getModelName(name);
    }
    notFound(name, text) {
        return new errors_1.NotFoundError(text || `${name || this.modelName} not found!`);
    }
    createError(result, name, text) {
        if (!result) {
            throw new errors_1.CreateError(text || `Error creating ${name || this.modelName}`);
        }
    }
    updateError(result, name) {
        if (result.matchedCount === 0) {
            throw this.notFound(name || this.modelName);
        }
    }
    getError(result, name) {
        if (!result) {
            throw this.notFound(name || this.modelName);
        }
    }
    getAllError(result, name) {
        if (result.length === 0) {
            throw this.notFound(name || this.modelName);
        }
    }
    deleteError(result, name) {
        if (result.deletedCount === 0) {
            throw this.notFound(name || this.modelName);
        }
    }
}
__decorate([
    acknowledged(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ErrorHelper.prototype, "updateError", null);
__decorate([
    acknowledged(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ErrorHelper.prototype, "getAllError", null);
__decorate([
    acknowledged(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ErrorHelper.prototype, "deleteError", null);
exports.ErrorHelper = ErrorHelper;
//# sourceMappingURL=manage-error.js.map