"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cms = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const cmsRouter_1 = require("./cmsRouter");
const router = new koa_router_1.default();
exports.cms = router;
router.use('/cms', cmsRouter_1.cmsRouter.routes());
