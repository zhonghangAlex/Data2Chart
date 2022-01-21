"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDao_1 = __importDefault(require("../db/dao/UserDao"));
exports.default = new class UserController {
    /**
     * 根据一个ID数组查询所有的用户
     * @param ctx
     */
    async getSomeUsers(ctx) {
        let data = await UserDao_1.default.findUserByIds([1]);
        ctx.body = data;
    }
};
