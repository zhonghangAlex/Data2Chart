import Router from 'koa-router';
import UserController from '../../controller/UserController';
import User from '../../db/model/t_sysuser.model';

const router = new Router();

/* 首屏页 */
router.get('/', UserController.getSomeUsers);

/**************************************【用户信息相关路由↓】**************************************/
/* 根据ID数组获取多个用户的信息 */
router.get('/get_some_users', UserController.getSomeUsers);
/* 根据username查询单个用户信息 */
router.get('/getUser', UserController.getSomeUsers);
/* 修改用户信息 */
router.post('/editUser', UserController.getSomeUsers);
/* 新增用户信息 */
router.post('/addUser', UserController.getSomeUsers);
/* 删除用户信息 */
router.post('/deleteUser', UserController.getSomeUsers);
// 待定

/**************************************【数据源选定相关接口↓】************************************/
// 待定

/*********************************【图表可视化映射及操作相关接口↓】*********************************/
// 待定

/************************************【发布导出及分析相关接口↓】***********************************/
// 待定

/***************************************【其它通用接口↓】*****************************************/
// 待定

export { router as cmsRouter };
