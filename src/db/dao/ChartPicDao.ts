import { Op } from 'sequelize';
import ChartPic from '../model/t_chartpic.model';
import ChartType from '../model/t_charttype.model';

export default new class ChartPicDao {
    /**
     * 传入图表信息，用以新建一个项目下的新图表
     * @param chartpic_info 
     */
    public async addChartPic (chartpic_info: Record<string, any>) {
        return await ChartPic.create(chartpic_info);
    }

    /**
     * 传入项目ID，用以查询一个项目下的所有图表
     * @param project_id 
     */
    public async getAllChartPic (project_id: string) {
        return await ChartPic.findAll({where: {project_id}});
    }

    /**
     * 传入图表ID，用以查询某图表的信息
     * @param chartpic_id 
     */
    public async getOneChartPic (chartpic_id: string) {
        return await ChartPic.findOne({where: {chartpic_id}});
    }

    /**
     * 传入图表id，用以删除一个项目下的某个图表
     * @param chartpic_id
     */
    public async deleteChartPic (chartpic_id: string) {
        return await ChartPic.destroy({where: {chartpic_id}});
    }

    /**
     * 传入图表id，用以删除一个项目下的所有图表
     * @param project_id
     */
    public async deleteChartPicAll (project_id: string) {
        return await ChartPic.destroy({where: {project_id}});
    }

    /**
     * 通过图表id，对图表信息进行更新
     * @param chartpic_id
     */
    public async updateChartPic (chartpic_id: string, options: Record<string, any>) {
        return await ChartPic.update(options, {where: {chartpic_id}});
    }
};