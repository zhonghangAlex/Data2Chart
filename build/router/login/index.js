"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const loginRouter_1 = require("./loginRouter");
const router = new koa_router_1.default();
exports.login = router;
router.use('/login', loginRouter_1.loginRouter.routes());
