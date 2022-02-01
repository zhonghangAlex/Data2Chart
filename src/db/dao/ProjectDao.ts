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
};