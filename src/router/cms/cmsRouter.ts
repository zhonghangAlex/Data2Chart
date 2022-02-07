import Router from 'koa-router';
import UserController from '../../controller/UserController';
import User from '../../db/model/t_sysuser.model';
import ProjectController from '../../controller/ProjectController';
import ChartPicController from '../../controller/ChartPicController';

const router = new Router();

/* 首屏页 */
router.get('/', UserController.getSomeUsers);

/**************************************【用户信息相关路由↓】**************************************/
/* 根据ID数组获取多个用户的信息 */
router.get('/get_some_users', UserController.getSomeUsers);
/* 根据user_name查询单个用户信息 */
router.get('/getUser', UserController.getSomeUsers);
/* 修改用户信息 */
router.post('/editUser', UserController.getSomeUsers);
/* 新增用户信息 */
router.post('/addUser', UserController.getSomeUsers);
/* 删除用户信息 */
router.post('/deleteUser', UserController.getSomeUsers);
// 待定

/**************************************【项目管理相关路由↓】**************************************/
/* 新建一个项目并且新建一个默认图表 */
router.post('/addProject', ProjectController.addProject);
/* 删除一个项目并且删除项目下的所有图表 */
router.post('/deleteProject', ProjectController.deleteProject);
/* 查询用户的项目信息 */
router.get('/getAllProjects', ProjectController.getAllProjects);

/**************************************【数据源选定相关接口↓】************************************/
/* 根据项目id获取某项目的数据 */
router.get('/getProjectData', ProjectController.getProjectData);
/* 根据项目id更新某项目的数据 */
router.post('/updateProjectData', ProjectController.updateProjectData);
/* 根据项目id更新某项目的状态 */
router.post('/updateProjectStatus', ProjectController.updateProjectStatus);

/*********************************【图表可视化映射及操作相关接口↓】*********************************/
/* 项目下新增一个可视化图表 */
router.post('/addChartPic', ChartPicController.addChartPic);
/* 获取项目下所有可视化图表 */
router.get('/getAllChartPic', ChartPicController.getAllChartPic);
/* 根据图表id获取当前图表信息 */
router.get('/getCurrentChartPic', ChartPicController.getCurrentChartPic);
/* 项目下删除一个可视化图表 */
router.post('/deleteChartPic', ChartPicController.deleteChartPic);
/* 更新某一个可视化图表的类型并且重新初始化配置 */
router.post('/updateChartPicConfig', ChartPicController.updateChartPicConfig);

/************************************【发布导出及分析相关接口↓】***********************************/
/* 更新当前图表的导出图片，并设置为主图 */
router.post('/updateCurrentChartPicExport', ChartPicController.updateCurrentChartPicExport);
/* 获取当前图表的html代码 */
router.get('/getChartPicHtmlString', ChartPicController.getChartPicHtmlString);
/* 下载当前图表的html文件 */
router.post('/getChartPicHtmlFile', ChartPicController.getChartPicHtmlFile);

/***************************************【其它通用接口↓】*****************************************/
// 待定

export { router as cmsRouter };
