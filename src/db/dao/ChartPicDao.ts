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
     * 传入图表id，用以删除一个项目下的某个图表
     * @param chartpic_id
     */
    public async deleteChartPic (chartpic_id: string) {
        return await ChartPic.destroy({where: {chartpic_id}});
    }
};