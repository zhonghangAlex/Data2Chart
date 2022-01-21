import Router from 'koa-router';
import {loginRouter} from './loginRouter';

const router = new Router();
router.use('/login', loginRouter.routes());
export {router as login};