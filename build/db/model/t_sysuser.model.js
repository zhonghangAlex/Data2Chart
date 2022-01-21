"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc t_sysuser 用户信息表
 */
const sequelize_typescript_1 = require("sequelize-typescript");
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '自增ID', 'type': sequelize_typescript_1.DataType.INTEGER, 'primaryKey': true, 'autoIncrement': true, 'allowNull': false }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Index)({ 'name': 'idx_user_name', 'unique': true }),
    (0, sequelize_typescript_1.Column)({ 'comment': '用户名', 'type': sequelize_typescript_1.DataType.STRING(255) }),
    __metadata("design:type", String)
], User.prototype, "user_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '邮箱', 'type': sequelize_typescript_1.DataType.STRING(255) }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '密码', 'type': sequelize_typescript_1.DataType.STRING(255) }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '手机号', 'type': sequelize_typescript_1.DataType.STRING(255) }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '用户权限', 'type': sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], User.prototype, "user_power", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '用户积分', 'type': sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], User.prototype, "user_account", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '数据创建时间', 'type': sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], User.prototype, "create_time", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '数据更新时间', 'type': sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], User.prototype, "modify_time", void 0);
User = __decorate([
    (0, sequelize_typescript_1.Table)({ 'modelName': 't_sysuser', 'timestamps': false })
], User);
exports.default = User;
