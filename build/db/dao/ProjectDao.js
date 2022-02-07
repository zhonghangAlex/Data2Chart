"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const t_project_model_1 = __importDefault(require("../model/t_project.model"));
exports.default = new class ProjectDao {
    /**
     * 传入新建项目信息，用以新建一个项目
     * @param project_info
     */
    async addProject(project_info) {
        return await t_project_model_1.default.create(project_info);
    }
    /**
     * 传入新建项目ID，用以删除一个项目
     * @param project_id
     */
    async deleteProject(project_id) {
        return await t_project_model_1.default.destroy({ where: { project_id } });
    }
    /**
     * 传入新建项目名称，和用户名，检查有无同时匹配的项目（查重）
     * @param project_name
     * @param user_name
     */
    async checkRepeatProject(project_name, user_name) {
        return await t_project_model_1.default.findOne({ where: { user_name: user_name, project_name: project_name } });
    }
    /**
     * 根据用户名查找所有项目
     * @param user_name
     */
    async getAllProjects(user_name) {
        return await t_project_model_1.default.findAll({ where: { user_name: user_name } });
    }
    /**
     * 根据项目id查询某一个项目信息
     * @param project_id
     */
    async getOneProject(project_id) {
        return await t_project_model_1.default.findOne({ where: { project_id: project_id } });
    }
    /**
     * 根据项目id，更新某一个项目的数据源
     * @param project_id
     */
    async updateProjectData(project_id, options) {
        return await t_project_model_1.default.update(options, { where: { project_id: project_id } });
    }
};
