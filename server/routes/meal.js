import meal from '../controllers/meal';
import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();

router.get('/', meal.getMeals);
router.get('/:id', meal.getMeal);
router.post('/', meal.addMeal);
router.put('/:id', meal.putMeal);
router.delete('/:id', meal.deleteMeal);

export default router;