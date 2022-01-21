"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const t_sysuser_model_1 = __importDefault(require("../model/t_sysuser.model"));
exports.default = new class UserDao {
    /**
     * 传入多个id构成的数组，获得多个用户id查询的结果
     * @param user_ids
     */
    async findUserByIds(user_ids) {
        return await t_sysuser_model_1.default.findAll({ 'where': { 'id': { [sequelize_1.Op.in]: user_ids } } });
    }
    /**
     * 传入用户名，对用户进行查询
     * @param user_name
     */
    async findUserByName(user_name) {
        return await t_sysuser_model_1.default.findOne({ 'where': { 'user_name': user_name } });
    }
    /**
     * 传入新用户信息，从而新增用户
     * @param options
     */
    async addUser(options) {
        return await t_sysuser_model_1.default.create(options);
    }
};
