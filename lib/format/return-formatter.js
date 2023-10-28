"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnFormatter = void 0;
const error_to_json_1 = require("./error-to-json");
function returnFormatter(data, message = '', status = 'success') {
    if (message === '') {
        return {
            result: data,
            status: status
        };
    }
    if (data instanceof Error) {
        return {
            error: (0, error_to_json_1.toJson)(data),
            message: message,
            status: status
        };
    }
    return {
        result: data,
        message: message,
        status: status
    };
}
exports.returnFormatter = returnFormatter;
//# sourceMappingURL=return-formatter.js.map