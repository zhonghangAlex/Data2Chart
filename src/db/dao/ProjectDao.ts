import { Op } from 'sequelize';
import Project from '../model/t_project.model';

export default new class ProjectDao {
    /**
     * 传入新建项目信息，用以新建一个项目
     * @param project_info 
     */
    public async addProject (project_info: Record<string, any>) {
        return await Project.create(project_info);
    }

    /**
     * 传入新建项目名称，和用户名，检查有无同时匹配的项目（查重）
     * @param project_name
     * @param user_name
     */
    public async checkRepeatProject(project_name: string, user_name: string) {
        return await Project.findOne({where: {user_name: user_name, project_name: project_name}});
    }

    /**
     * 根据用户名查找所有项目
     * @param user_name
     */
    public async getAllProjects(user_name: string) {
        return await Project.findAll({where: {user_name: user_name}});
    }

    /**
     * 根据项目id查询某一个项目信息
     * @param project_id
     */
    public async getOneProject(project_id: string) {
        return await Project.findOne({where: {project_id: project_id}});
    }

    /**
     * 根据项目id，更新某一个项目的数据源
     * @param project_id
     */
    public async updateProjectData(project_id: string, data_string: string) {
        return await Project.update({data_string}, {where: {project_id: project_id}});
    }
};