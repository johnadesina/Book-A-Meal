import menu from '../controllers/menu';
import express from 'express';
import bodyParser from 'body-parser';

const jsonParser = bodyParser.json();

const router = express.Router();

router.get('/', menu.get);
router.get('/:menuid', menu.getA);
router.post('/', jsonParser, menu.add);


export default router;