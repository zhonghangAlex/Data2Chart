import Router from 'koa-router';
import UserDao from '../db/dao/UserDao';

export default new class UserController {
    /**
     * 根据一个ID数组查询所有的用户
     * @param ctx 
     */
    public async getSomeUsers(ctx: Router.RouterContext){
        let data = await UserDao.findUserByIds([1]);
        ctx.body = {
            'code': 0,
            'message': '获取信息成功',
            'result': {
                userData: data
            }
        };
    }
};