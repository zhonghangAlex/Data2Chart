import Router from 'koa-router';
import { cmsRouter } from './cmsRouter';


const router = new Router();
router.use('/cms', cmsRouter.routes());

export { router as cms };

