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
/* 新建一个项目 */
router.post('/addProject', ProjectController_1.default.addProject);
/* 查询用户的项目信息 */
router.get('/getAllProjects', ProjectController_1.default.getAllProjects);
/**************************************【数据源选定相关接口↓】************************************/
// 待定
/*********************************【图表可视化映射及操作相关接口↓】*********************************/
/* 项目下新增一个可视化图表 */
router.post('/addChartPic', ChartPicController_1.default.addChartPic);
/* 项目下删除一个可视化图表 */
router.post('/deleteChartPic', ChartPicController_1.default.deleteChartPic);
