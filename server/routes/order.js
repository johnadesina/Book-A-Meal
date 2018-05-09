import order from '../controllers/order';
import express from 'express';
import bodyParser from 'body-parser';
import Auth from '../middlewares/authentication';
import validate from '../middlewares/validations';

const router = express.Router();

router.get('/', Auth.Verify, order.getOrders);
router.get('/:id', Auth.Verify, Auth.Admin, order.getOrder);
router.post('/', Auth.Verify, validate.makeOrder, order.addOrder);
router.put('/:id', Auth.Verify, validate.makeOrder, order.putOrder);

export default router;