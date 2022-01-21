"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmsRouter = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const UserController_1 = __importDefault(require("../../controller/UserController"));
const router = new koa_router_1.default();
exports.cmsRouter = router;
/* 首屏页 */
router.get('/', UserController_1.default.getSomeUsers);
/**************************************【用户信息相关路由↓】**************************************/
/* 根据ID数组获取多个用户的信息 */
router.get('/get_some_users', UserController_1.default.getSomeUsers);
/* 根据username查询单个用户信息 */
router.get('/getUser', UserController_1.default.getSomeUsers);
/* 修改用户信息 */
router.post('/editUser', UserController_1.default.getSomeUsers);
/* 新增用户信息 */
router.post('/addUser', UserController_1.default.getSomeUsers);
/* 删除用户信息 */
router.post('/deleteUser', UserController_1.default.getSomeUsers);
