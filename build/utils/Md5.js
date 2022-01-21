"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
function default_1(str) {
    let md5 = crypto_1.default.createHash('md5');
    md5.update(str);
    return md5.digest('hex');
}
exports.default = default_1;
