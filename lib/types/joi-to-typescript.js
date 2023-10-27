"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const joi_to_typescript_1 = require("joi-to-typescript");
function convert(directories) {
    directories.forEach((directory) => {
        (0, joi_to_typescript_1.convertFromDirectory)(directory);
    });
}
exports.convert = convert;
//# sourceMappingURL=joi-to-typescript.js.map