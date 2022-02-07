"use strict";
/**
 * @desc t_charttype 可视化图表类型
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
let ChartType = class ChartType extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '自增ID', 'type': sequelize_typescript_1.DataType.INTEGER, 'primaryKey': true, 'autoIncrement': true, 'allowNull': false }),
    __metadata("design:type", Number)
], ChartType.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '图表类型编号', 'type': sequelize_typescript_1.DataType.STRING(255), 'unique': true, 'allowNull': false }),
    __metadata("design:type", String)
], ChartType.prototype, "chart_type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '图表类型名称', 'type': sequelize_typescript_1.DataType.STRING(255) }),
    __metadata("design:type", String)
], ChartType.prototype, "charttype_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '图表父类名称', 'type': sequelize_typescript_1.DataType.STRING(255) }),
    __metadata("design:type", String)
], ChartType.prototype, "father_charttype_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '数据创建时间', 'type': sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], ChartType.prototype, "create_time", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ 'comment': '数据更新时间', 'type': sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], ChartType.prototype, "modify_time", void 0);
ChartType = __decorate([
    (0, sequelize_typescript_1.Table)({ 'modelName': 't_charttype', 'timestamps': false })
], ChartType);
exports.default = ChartType;
