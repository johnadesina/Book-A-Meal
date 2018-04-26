import order from '../controllers/order';
import express from 'express';
import bodyParser from 'body-parser';

const jsonParser = bodyParser.json();

const router = express.Router();

router.get('/', order.get);
router.get('/:orderid', order.getA);
router.post('/', jsonParser, order.add);
router.put('/:orderid', jsonParser, order.put);


export default router;