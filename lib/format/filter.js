"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
function filter(object, projection) {
    const result = Object.assign({}, object);
    for (let i in projection) {
        var key = projection[i];
        if (key in result) {
            delete result[key];
        }
    }
    return result;
}
exports.filter = filter;
//# sourceMappingURL=filter.js.map