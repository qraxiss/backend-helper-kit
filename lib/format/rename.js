"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rename = void 0;
function rename(o, old_key, new_key) {
    if (old_key === new_key)
        return o;
    if (!o[old_key])
        return o;
    if (old_key !== new_key) {
        const result = Object.assign({}, o);
        result[new_key] = result[old_key];
        delete result[old_key];
        return result;
    }
}
exports.rename = rename;
//# sourceMappingURL=rename.js.map