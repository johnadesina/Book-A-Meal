import menu from '../controllers/menu';
import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();

router.get('/', menu.getMenus);
router.get('/:menuid', menu.getMenu);
router.post('/', menu.addMenu);

export default router;