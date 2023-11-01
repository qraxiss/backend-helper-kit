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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionAxios = void 0;
const axios_1 = __importDefault(require("axios"));
class SessionAxios {
    constructor(axiosConfig) {
        this.Cookie = '';
        this.axiosInstance = axios_1.default.create(axiosConfig);
        this.axiosInstance.defaults.withCredentials = true;
    }
    request(config) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!config.headers) {
                config.headers = {
                    Cookie: this.Cookie
                };
            }
            else {
                config.headers.Cookie = this.Cookie;
            }
            const response = yield this.axiosInstance.request(config);
            if (response.headers['set-cookie']) {
                this.Cookie = response.headers['set-cookie'][0];
            }
            return response;
        });
    }
}
exports.SessionAxios = SessionAxios;
//# sourceMappingURL=axios-session.js.map