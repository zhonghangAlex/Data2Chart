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
     * 传入图表id，用以删除一个项目下的某个图表
     * @param chartpic_id
     */
    async deleteChartPic(chartpic_id) {
        return await t_chartpic_model_1.default.destroy({ where: { chartpic_id } });
    }
};
