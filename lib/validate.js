"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const errors_1 = require("./error/errors");
function validate(params, validator) {
    let { value, error } = validator.validate(params);
    if (error)
        throw new errors_1.CastError(error.message);
    return value;
}
exports.validate = validate;
//# sourceMappingURL=validate.js.map