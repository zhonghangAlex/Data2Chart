import Router from 'koa-router';
import ProjectDao from '../db/dao/ProjectDao';
import { v4 as uuidv4 } from 'uuid';
import { addChartPicFunc } from '../service/ChartPicService';
import ChartPicDao from '../db/dao/ChartPicDao';

export default new class UserController {
    /**
     * 某用户新建一个项目
     * @param ctx 
     */
    public async addProject(ctx: Router.RouterContext){
        let user_name = ctx.request.body.user_name;
        let project_name = ctx.request.body.project_name;
        let data_string = ctx.request.body.data_string;
        // 缺失检查
        if (!user_name || !project_name){
            ctx.body = { code: 1, message: '请求参数错误或内容缺失', result: null };
            return;
        }
        // 检查同一用户下是否存在相同名称的项目
        try {
            let checkRes = await ProjectDao.checkRepeatProject(project_name, user_name);
            if (checkRes) {
                ctx.body = { code: 1, message: '项目名称重复，请重新输入确认', result: null };
                return;
            }
        } catch(e) {
            ctx.body = { code: 1, message: '数据查询异常', result: {details: `${e}` }};
        }
        const project_id = uuidv4();
        // 定义项目插入数据模型
        let project_info: Record<string, any> = {
            user_name,
            project_name,
            project_id,
            data_string,
            create_time: new Date(),
            modify_time: new Date()
        };
        // 新项目入库操作
        let data; 
        try {
            data = await ProjectDao.addProject(project_info);
        } catch(e) {
            ctx.body = { code: 1, message: '新建项目数据存储异常', result: {details: `${e}` }};
            return;
        }
        // 新建默认图表数据
        let res = await addChartPicFunc(project_id, '666');
        ctx.body = res.code === 0 ? { code: 0, message: `“${project_name}”项目新建成功`, result: { data }} : res;
    }

    /**
     * 删除某个特定项目
     * @param ctx 
     */
    public async deleteProject(ctx: Router.RouterContext){
        let project_id = ctx.request.body.project_id;
        // 缺失检查
        if (!project_id){
            ctx.body = { code: 1, message: '请求参数错误或内容缺失', result: null };
            return;
        }
        // 删除操作
        try {
            await ProjectDao.deleteProject(project_id);
            await ChartPicDao.deleteChartPicAll(project_id);
            ctx.body = { code: 0, message: '项目删除成功', result: null };
        } catch(e) {
            ctx.body = { code: 1, message: '删除项目数据异常', result: {details: `${e}` }};
            return;
        }
    }

    /**
     * 获取某用户的项目信息
     * @param ctx 
     */
    public async getAllProjects(ctx: Router.RouterContext){
        let user_name = ctx.request.query.user_name;
        // 缺失检查
        if (!user_name){
            ctx.body = { code: 1, message: '请求参数错误或内容缺失', result: null };
            return;
        }
        // 新项目入库操作
        try {
            let data = await ProjectDao.getAllProjects(user_name);
            ctx.body = { code: 0, message: `${user_name}的项目信息获取成功`, result: { data }};
        } catch(e) {
            ctx.body = { code: 1, message: '数据查询异常', result: {details: `${e}` }};
        }
    }

    /**
     * 获取某项目的数据
     * @param ctx 
     */
    public async getProjectData(ctx: Router.RouterContext){
        let project_id = ctx.request.query.project_id;
        // 缺失检查
        if (!project_id){
            ctx.body = { code: 1, message: '请求参数错误或内容缺失', result: null };
            return;
        }
        // 查询操作
        try {
            let data = await ProjectDao.getOneProject(project_id);
            if (!data) {
                ctx.body = { code: 1, message: '未查找到相关数据，请检查项目ID', result: null };
                return;
            }
            ctx.body = { code: 0, message: '项目数据获取成功', result: { data: data.data_string }};
        } catch(e) {
            ctx.body = { code: 1, message: '数据查询异常', result: {details: `${e}` }};
        }
    }

    /**
     * 更新某项目的数据
     * @param ctx 
     */
    public async updateProjectData(ctx: Router.RouterContext){
        let project_id = ctx.request.body.project_id;
        let data_string = ctx.request.body.data_string;
        // 缺失检查
        if (!project_id || !data_string){
            ctx.body = { code: 1, message: '请求参数错误或内容缺失', result: null };
            return;
        }
        // 数据更新操作
        try {
            await ProjectDao.updateProjectData(project_id, {data_string, modify_time: new Date()});
            ctx.body = { code: 0, message: '项目数据源更新成功', result: { project_id, data_string }};
        } catch(e) {
            ctx.body = { code: 1, message: '数据更新异常', result: {details: `${e}` }};
        }
    }

    /**
     * 更新某项目的进行状态
     * @param ctx 
     */
    public async updateProjectStatus(ctx: Router.RouterContext){
        let project_id = ctx.request.body.project_id;
        let first_finished = ctx.request.body.first_finished;
        let second_finished = ctx.request.body.second_finished;
        let third_finished = ctx.request.body.third_finished;
        // 缺失检查
        if (!project_id || !first_finished || !second_finished || !third_finished){
            ctx.body = { code: 1, message: '请求参数错误或内容缺失', result: null };
            return;
        }
        // 类型检查
        if (isNaN(first_finished) || isNaN(second_finished) || isNaN(third_finished)) {
            ctx.body = { code: 1, message: '状态值应该为数字', result: null };
            return;
        }
        first_finished = Number(first_finished);
        second_finished = Number(second_finished);
        third_finished = Number(third_finished);
        // 状态值检查
        if ([-1, 1].indexOf(first_finished) === -1 || [-1, 1].indexOf(second_finished) === -1 || [-1, 1].indexOf(third_finished) === -1) {
            ctx.body = { code: 1, message: '状态值必须为-1或1的数字', result: null };
            return;
        }
        // 数据更新操作
        try {
            await ProjectDao.updateProjectData(project_id, {first_finished, second_finished, third_finished, modify_time: new Date()});
            ctx.body = { code: 0, message: '项目状态更新成功', result: { project_id, first_finished, second_finished, third_finished}};
        } catch(e) {
            ctx.body = { code: 1, message: '数据更新异常', result: {details: `${e}` }};
        }
    }
};