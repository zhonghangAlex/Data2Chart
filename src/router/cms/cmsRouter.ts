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
/* 新建一个项目 */
router.post('/addProject', ProjectController.addProject);
/* 查询用户的项目信息 */
router.get('/getAllProjects', ProjectController.getAllProjects);

/**************************************【数据源选定相关接口↓】************************************/
// 待定

/*********************************【图表可视化映射及操作相关接口↓】*********************************/
/* 项目下新增一个可视化图表 */
router.post('/addChartPic', ChartPicController.addChartPic);
/* 项目下删除一个可视化图表 */
router.post('/deleteChartPic', ChartPicController.deleteChartPic);

/************************************【发布导出及分析相关接口↓】***********************************/
// 待定

/***************************************【其它通用接口↓】*****************************************/
// 待定

export { router as cmsRouter };
