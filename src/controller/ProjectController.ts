import Router from 'koa-router';
import ProjectDao from '../db/dao/ProjectDao';
import { v4 as uuidv4 } from 'uuid';

export default new class UserController {
    /**
     * 某用户新建一个项目
     * @param ctx 
     */
    public async addProject(ctx: Router.RouterContext){
        let user_name = ctx.request.body.user_name;
        let project_name = ctx.request.body.project_name;
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
        // 定义插入数据模型
        let project_info: Record<string, any> = {
            user_name,
            project_name,
            project_id: uuidv4(),
            create_time: new Date(),
            modify_time: new Date()
        };
        // 新项目入库操作
        try {
            let data = await ProjectDao.addProject(project_info);
            ctx.body = { code: 0, message: `“${project_name}”项目新建成功`, result: { data }};
        } catch(e) {
            ctx.body = { code: 1, message: '数据存储异常', result: {details: `${e}` }};
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
            ctx.body = { code: 1, message: '数据存储异常', result: {details: `${e}` }};
        }
    }
};