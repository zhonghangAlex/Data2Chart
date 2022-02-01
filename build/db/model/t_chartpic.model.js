"use strict";
/**
 * @desc t_chartpic 可视化图表记录表
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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
let ChartPic = class ChartPic extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '自增ID', 'type': sequelize_typescript_1.DataType.INTEGER, 'primaryKey': true, 'autoIncrement': true, 'allowNull': false }),
    __metadata("design:type", Number)
], ChartPic.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '图表编号', 'type': sequelize_typescript_1.DataType.STRING(255), 'unique': true }),
    __metadata("design:type", String)
], ChartPic.prototype, "chartpic_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '项目编号', 'type': sequelize_typescript_1.DataType.STRING(255), 'allowNull': false }),
    __metadata("design:type", String)
], ChartPic.prototype, "project_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '图表类型编号', 'type': sequelize_typescript_1.DataType.STRING(255), 'allowNull': false }),
    __metadata("design:type", String)
], ChartPic.prototype, "charttype_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '项目配置项数据', 'type': sequelize_typescript_1.DataType.TEXT, 'defaultValue': '{}' }),
    __metadata("design:type", String)
], ChartPic.prototype, "vis_config", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '水印配置数据', 'type': sequelize_typescript_1.DataType.TEXT, 'defaultValue': '{}' }),
    __metadata("design:type", String)
], ChartPic.prototype, "watermark_config", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '导出图片', 'type': sequelize_typescript_1.DataType.STRING(255) }),
    __metadata("design:type", String)
], ChartPic.prototype, "export_img", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '数据创建时间', 'type': sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], ChartPic.prototype, "create_time", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '数据更新时间', 'type': sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], ChartPic.prototype, "modify_time", void 0);
ChartPic = __decorate([
    (0, sequelize_typescript_1.Table)({ 'modelName': 't_chartpic', 'timestamps': false })
], ChartPic);
exports.default = ChartPic;
