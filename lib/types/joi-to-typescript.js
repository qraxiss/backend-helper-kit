"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const joi_to_typescript_1 = require("joi-to-typescript");
function convert() {
    (0, joi_to_typescript_1.convertFromDirectory)({
        schemaDirectory: './logic/validators/returns',
        typeOutputDirectory: './logic/types/returns'
    });
    (0, joi_to_typescript_1.convertFromDirectory)({
        schemaDirectory: './logic/validators/params',
        typeOutputDirectory: './logic/types/params'
    });
}
exports.convert = convert;
//# sourceMappingURL=joi-to-typescript.js.map