import order from '../controllers/order';
import express from 'express';
import bodyParser from 'body-parser';

const jsonParser = bodyParser.json();
const router = express.Router();

router.get('/', order.getOrders);
router.get('/:orderid', order.getOrder);
router.post('/', order.addOrder);
router.put('/:orderid', order.putOrder);

export default router;