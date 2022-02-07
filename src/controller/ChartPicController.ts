import Router from 'koa-router';
import ChartPicDao from '../db/dao/ChartPicDao';
import { addChartPicFunc, getMergedHTMLStringFunc } from '../service/ChartPicService';
import ProjectDao from '../db/dao/ProjectDao';


export default new class ChartPicController {
    /**
     * 某项目下新增一个图表
     * @param ctx 
     */
    public async addChartPic(ctx: Router.RouterContext){
        let project_id = ctx.request.body.project_id;
        let chart_type = ctx.request.body.chart_type || '666';
        ctx.body = await addChartPicFunc(project_id, chart_type);
    }

    /**
     * 获取某项目下的所有图表
     * @param ctx 
     */
    public async getAllChartPic(ctx: Router.RouterContext){
        let project_id = ctx.request.query.project_id;
        // 缺失检查
        if (!project_id) {
            ctx.body = { code: 1, message: '请求参数错误或内容缺失', result: null };
            return;
        }
        // 查询操作
        try {
            let data = await ChartPicDao.getAllChartPic(project_id);;
            ctx.body = { code: 0, message: '图表信息查询成功', result: { data } };
        } catch(e) {
            ctx.body = { code: 1, message: '数据查询异常', result: {details: `${e}` }};
        }
    }

    /**
     * 根据图表id获取当前图表信息
     * @param ctx 
     */
    public async getCurrentChartPic(ctx: Router.RouterContext){
        let chartpic_id = ctx.request.query.chartpic_id;
        // 缺失检查
        if (!chartpic_id) {
            ctx.body = { code: 1, message: '请求参数错误或内容缺失', result: null };
            return;
        }
        // 查询操作
        try {
            let data = await ChartPicDao.getOneChartPic(chartpic_id);
            ctx.body = { code: 0, message: '图表信息查询成功', result: { data } };
        } catch(e) {
            ctx.body = { code: 1, message: '数据查询异常', result: {details: `${e}` }};
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

    /**
     * 更新某一个可视化图表的类型并且重新初始化配置
     * @param ctx 
     */
    public async updateChartPicConfig(ctx: Router.RouterContext){
        let chartpic_id = ctx.request.body.chartpic_id;
        let chart_type = ctx.request.body.chart_type;
        let chart_title = ctx.request.body.chart_title;
        let vis_config = ctx.request.body.vis_config;
        let watermark_config = ctx.request.body.watermark_config;
        // 缺失检查
        if (!chartpic_id || !chart_type || !chart_title || !vis_config || !watermark_config) {
            ctx.body = { code: 1, message: '请求参数错误或内容缺失', result: null };
            return;
        }
        // 图表信息更新操作
        try {
            await ChartPicDao.updateChartPic(chartpic_id, {chart_type, chart_title, vis_config, watermark_config, modify_time: new Date()});
            ctx.body = { code: 0, message: '图表配置更新成功', result: {chartpic_id, chart_type, chart_title, vis_config, watermark_config }};
        } catch(e) {
            ctx.body = { code: 1, message: '数据更新异常', result: {details: `${e}` }};
        }
    }

    /**
     * 更新当前图表的导出图片，并设置为主图
     * @param ctx 
     */
    public async updateCurrentChartPicExport(ctx: Router.RouterContext){
        let chartpic_id = ctx.request.body.chartpic_id;
        let project_id = ctx.request.body.project_id;
        let export_img = ctx.request.body.export_img;
        // 缺失检查
        if (!chartpic_id || !project_id || !export_img) {
            ctx.body = { code: 1, message: '请求参数错误或内容缺失', result: null };
            return;
        }
        // 获取当前图表信息
        try {
            await ChartPicDao.updateChartPic(chartpic_id, { export_img, modify_time: new Date() });
            await ProjectDao.updateProjectData(project_id, { index_pic: export_img, modify_time: new Date() });
            ctx.body = { code: 0, message: '图片更新成功', result: null };
        } catch(e) {
            ctx.body = { code: 1, message: '数据获取异常', result: {details: `${e}` }};
            return;
        }
    }

    /**
     * 获取当前图表的html代码
     * @param ctx 
     */
    public async getChartPicHtmlString(ctx: Router.RouterContext){
        let chartpic_id = ctx.request.query.chartpic_id;
        // 缺失检查
        if (!chartpic_id) {
            ctx.body = { code: 1, message: '请求参数错误或内容缺失', result: null };
            return;
        }
        // html字符串获取与数据融合操作
        ctx.body = await getMergedHTMLStringFunc(chartpic_id);
    }

    /**
     * 下载当前图表的html文件
     * @param ctx 
     */
    public async getChartPicHtmlFile(ctx: Router.RouterContext){
        let chartpic_id = ctx.request.body.chartpic_id;
        // 缺失检查
        if (!chartpic_id) {
            ctx.append('ifExportSuccess' , '1');
            return;
        }
        // html字符串获取与数据融合操作
        let res = await getMergedHTMLStringFunc(chartpic_id);
        ctx.append('ifExportSuccess' , res.code.toString());
        if (res.code !== 0 || res.result === undefined || res.result?.data === undefined) {
            return; 
        };
        // 下载设置
        ctx.set('Content-Disposition','attachment; filename=exportCode.html');
        ctx.body = new Buffer(res.result.data);
    }
};