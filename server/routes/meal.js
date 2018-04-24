import meal from '../controllers/meal';
import express from 'express';
import bodyParser from 'body-parser';

const jsonParser = bodyParser.json();

const router = express.Router();

router.get('/', meal.get);
router.get('/:id', meal.getA);
router.post('/', jsonParser, meal.add);
router.put('/:id', jsonParser, meal.put);
router.delete('/:id', jsonParser, meal.delete);


export default router;