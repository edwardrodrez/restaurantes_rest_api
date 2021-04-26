import routerx from 'express-promise-router';
import test from './test';

const router = routerx();

router.use('/test', test);

export default router;