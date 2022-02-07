"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const t_chartpic_model_1 = __importDefault(require("../model/t_chartpic.model"));
exports.default = new class ChartPicDao {
    /**
     * 传入图表信息，用以新建一个项目下的新图表
     * @param chartpic_info
     */
    async addChartPic(chartpic_info) {
        return await t_chartpic_model_1.default.create(chartpic_info);
    }
    /**
     * 传入项目ID，用以查询一个项目下的所有图表
     * @param project_id
     */
    async getAllChartPic(project_id) {
        return await t_chartpic_model_1.default.findAll({ where: { project_id } });
    }
    /**
     * 传入图表ID，用以查询某图表的信息
     * @param chartpic_id
     */
    async getOneChartPic(chartpic_id) {
        return await t_chartpic_model_1.default.findOne({ where: { chartpic_id } });
    }
    /**
     * 传入图表id，用以删除一个项目下的某个图表
     * @param chartpic_id
     */
    async deleteChartPic(chartpic_id) {
        return await t_chartpic_model_1.default.destroy({ where: { chartpic_id } });
    }
    /**
     * 传入图表id，用以删除一个项目下的所有图表
     * @param project_id
     */
    async deleteChartPicAll(project_id) {
        return await t_chartpic_model_1.default.destroy({ where: { project_id } });
    }
    /**
     * 通过图表id，对图表信息进行更新
     * @param chartpic_id
     */
    async updateChartPic(chartpic_id, options) {
        return await t_chartpic_model_1.default.update(options, { where: { chartpic_id } });
    }
};
