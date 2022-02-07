"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmsRouter = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const UserController_1 = __importDefault(require("../../controller/UserController"));
const ProjectController_1 = __importDefault(require("../../controller/ProjectController"));
const ChartPicController_1 = __importDefault(require("../../controller/ChartPicController"));
const router = new koa_router_1.default();
exports.cmsRouter = router;
/* 首屏页 */
router.get('/', UserController_1.default.getSomeUsers);
/**************************************【用户信息相关路由↓】**************************************/
/* 根据ID数组获取多个用户的信息 */
router.get('/get_some_users', UserController_1.default.getSomeUsers);
/* 根据user_name查询单个用户信息 */
router.get('/getUser', UserController_1.default.getSomeUsers);
/* 修改用户信息 */
router.post('/editUser', UserController_1.default.getSomeUsers);
/* 新增用户信息 */
router.post('/addUser', UserController_1.default.getSomeUsers);
/* 删除用户信息 */
router.post('/deleteUser', UserController_1.default.getSomeUsers);
// 待定
/**************************************【项目管理相关路由↓】**************************************/
/* 新建一个项目并且新建一个默认图表 */
router.post('/addProject', ProjectController_1.default.addProject);
/* 删除一个项目并且删除项目下的所有图表 */
router.post('/deleteProject', ProjectController_1.default.deleteProject);
/* 查询用户的项目信息 */
router.get('/getAllProjects', ProjectController_1.default.getAllProjects);
/**************************************【数据源选定相关接口↓】************************************/
/* 根据项目id获取某项目的数据 */
router.get('/getProjectData', ProjectController_1.default.getProjectData);
/* 根据项目id更新某项目的数据 */
router.post('/updateProjectData', ProjectController_1.default.updateProjectData);
/* 根据项目id更新某项目的状态 */
router.post('/updateProjectStatus', ProjectController_1.default.updateProjectStatus);
/*********************************【图表可视化映射及操作相关接口↓】*********************************/
/* 项目下新增一个可视化图表 */
router.post('/addChartPic', ChartPicController_1.default.addChartPic);
/* 获取项目下所有可视化图表 */
router.get('/getAllChartPic', ChartPicController_1.default.getAllChartPic);
/* 根据图表id获取当前图表信息 */
router.get('/getCurrentChartPic', ChartPicController_1.default.getCurrentChartPic);
/* 项目下删除一个可视化图表 */
router.post('/deleteChartPic', ChartPicController_1.default.deleteChartPic);
/* 更新某一个可视化图表的类型并且重新初始化配置 */
router.post('/updateChartPicConfig', ChartPicController_1.default.updateChartPicConfig);
/************************************【发布导出及分析相关接口↓】***********************************/
/* 更新当前图表的导出图片，并设置为主图 */
router.post('/updateCurrentChartPicExport', ChartPicController_1.default.updateCurrentChartPicExport);
/* 获取当前图表的html代码 */
router.get('/getChartPicHtmlString', ChartPicController_1.default.getChartPicHtmlString);
/* 下载当前图表的html文件 */
router.post('/getChartPicHtmlFile', ChartPicController_1.default.getChartPicHtmlFile);
