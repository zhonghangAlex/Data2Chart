import { Op } from 'sequelize';
import User from '../model/t_sysuser.model';

export default new class UserDao {
    /**
     * 传入多个id构成的数组，获得多个用户id查询的结果
     * @param user_ids 
     */
    public async findUserByIds(user_ids: Array<number>){
        return await User.findAll({'where':{'id': {[Op.in]: user_ids}}});
    }

    /**
     * 传入用户名，对用户进行查询
     * @param user_name 
     */
    public async findUserByName(user_name: string){
        return await User.findOne({'where':{'user_name': user_name}});
    }

    /**
     * 传入新用户信息，从而新增用户
     * @param options  
     */
    public async addUser(options:any){
        return await User.create(options);
    }
};