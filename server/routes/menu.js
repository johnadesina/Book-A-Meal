import menu from '../controllers/menu';
import express from 'express';
import bodyParser from 'body-parser';
import Auth from '../middlewares/authentication';
import validate from '../middlewares/validations';

const router = express.Router();

router.get('/', Auth.Verify, menu.getMenus);
router.get('/:id', Auth.Verify, menu.getMenu);
router.post('/', Auth.Verify, Auth.Admin, validate.createMenu, menu.addMenu);

export default router;