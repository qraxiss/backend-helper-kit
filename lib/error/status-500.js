"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ws500 = exports.status500 = void 0;
const axios_1 = require("axios");
const return_formatter_1 = require("../format/return-formatter");
function status500(err, req, res, next) {
    var _a, _b, _c, _d, _e;
    if (err instanceof axios_1.AxiosError) {
        res.status(((_a = err.response) === null || _a === void 0 ? void 0 : _a.status) || ((_c = (_b = err.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.status) || 500);
        res.json({
            api_error: ((_d = err.response) === null || _d === void 0 ? void 0 : _d.data) || ((_e = err.response) === null || _e === void 0 ? void 0 : _e.statusText) || err.message
        });
        return next();
    }
    const json = (0, return_formatter_1.returnFormatter)(err, 'Something went wrong', 'failed');
    if (!json.error.status) {
        json.error.status = 500;
    }
    res.status(json.error.status);
    delete json.error.status;
    res.json(json);
    next();
}
exports.status500 = status500;
function ws500(err, ws, req) {
    var _a, _b;
    if (err instanceof axios_1.AxiosError) {
        ws.send(JSON.stringify({
            api_error: ((_a = err.response) === null || _a === void 0 ? void 0 : _a.data) || ((_b = err.response) === null || _b === void 0 ? void 0 : _b.statusText) || err.message
        }));
        return;
    }
    const json = (0, return_formatter_1.returnFormatter)(err, 'Something went wrong', 'failed');
    if (!json.error.status) {
        json.error.status = 500;
    }
    ws.send(JSON.stringify(json));
}
exports.ws500 = ws500;
//# sourceMappingURL=status-500.js.map