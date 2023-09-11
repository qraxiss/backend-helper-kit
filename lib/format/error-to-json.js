"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJson = void 0;
const errors_1 = require("../error/errors");
function toJson(err) {
    const json = {
        message: err.message,
        name: err.name
    };
    if (err instanceof errors_1.BaseError) {
        json.detail = err.detail;
        json.status = err.status;
    }
    return json;
}
exports.toJson = toJson;
//# sourceMappingURL=error-to-json.js.map