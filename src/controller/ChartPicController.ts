import Router from 'koa-router';
import ChartPicDao from '../db/dao/ChartPicDao';
import { v4 as uuidv4 } from 'uuid';

export default new class ChartPicController {
    /**
     * 某项目下新增一个图表
     * @param ctx 
     */
    public async addChartPic(ctx: Router.RouterContext){
        let project_id = ctx.request.body.project_id;
        let charttype_id = ctx.request.body.charttype_id;
        // 缺失检查
        if (!project_id || !charttype_id){
            ctx.body = { code: 1, message: '请求参数错误或内容缺失', result: null };
            return;
        }
        // 定义插入数据模型
        let chartpic_info: Record<string, any> = {
            chartpic_id: uuidv4(),
            project_id,
            charttype_id,
            create_time: new Date(),
            modify_time: new Date()
        };
        // 新项目入库操作
        try {
            let data = await ChartPicDao.addChartPic(chartpic_info);
            ctx.body = { code: 0, message: '图表新建成功', result: { data }};
        } catch(e) {
            ctx.body = { code: 1, message: '数据存储异常', result: {details: `${e}` }};
        }
    }
    /**
     * 删除某项目总的一个图表
     * @param ctx 
     */
    public async deleteChartPic(ctx: Router.RouterContext){
        let chartpic_id = ctx.request.body.chartpic_id;
        // 缺失检查
        if (!chartpic_id) {
            ctx.body = { code: 1, message: '请求参数错误或内容缺失', result: null };
            return;
        }
        // 新项目入库操作
        try {
            let data = await ChartPicDao.deleteChartPic(chartpic_id);
            ctx.body = { code: 0, message: '图表删除成功', result: null };
        } catch(e) {
            ctx.body = { code: 1, message: '数据删除异常', result: {details: `${e}` }};
        }
    }
};