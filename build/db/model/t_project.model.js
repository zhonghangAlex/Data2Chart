"use strict";
/**
 * @desc t_project 可视化项目列表
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const t_sysuser_model_1 = __importDefault(require("./t_sysuser.model"));
let Project = class Project extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '自增ID', 'type': sequelize_typescript_1.DataType.INTEGER, 'primaryKey': true, 'autoIncrement': true, 'allowNull': false }),
    __metadata("design:type", Number)
], Project.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Index)({ 'name': 'idx_project_name', 'unique': true }),
    (0, sequelize_typescript_1.Column)({ 'comment': '项目名', 'type': sequelize_typescript_1.DataType.STRING(255) }),
    __metadata("design:type", String)
], Project.prototype, "project_name", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => { return t_sysuser_model_1.default; }),
    (0, sequelize_typescript_1.Column)({ 'comment': '用户名', 'type': sequelize_typescript_1.DataType.STRING(255) }),
    __metadata("design:type", String)
], Project.prototype, "user_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '存储数据类型', 'type': sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Project.prototype, "data_type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '存储数据文件', 'type': sequelize_typescript_1.DataType.BLOB }),
    __metadata("design:type", Buffer)
], Project.prototype, "data_file", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '存储数据字符', 'type': sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], Project.prototype, "data_string", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '项目配置项数据', 'type': sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], Project.prototype, "vis_config", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '导出图片', 'type': sequelize_typescript_1.DataType.STRING(255) }),
    __metadata("design:type", String)
], Project.prototype, "export_img", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '项目分享hash地址', 'type': sequelize_typescript_1.DataType.STRING(255) }),
    __metadata("design:type", String)
], Project.prototype, "share_hash", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '数据创建时间', 'type': sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], Project.prototype, "create_time", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '数据更新时间', 'type': sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], Project.prototype, "modify_time", void 0);
Project = __decorate([
    (0, sequelize_typescript_1.Table)({ 'modelName': 't_project', 'timestamps': false })
], Project);
exports.default = Project;
