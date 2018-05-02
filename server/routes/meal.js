import meal from '../controllers/meal';
import express from 'express';
import bodyParser from 'body-parser';
import Auth from '../middlewares/authentication';
import validate from '../middlewares/validations';

const router = express.Router();

router.get('/', Auth.Verify, meal.getMeals);
router.get('/:id', Auth.Verify, meal.getMeal);
router.post('/', Auth.Verify, Auth.Admin, validate.createMeal, meal.addMeal);
router.put('/:id', Auth.Verify, Auth.Admin, validate.createMeal, meal.putMeal);
router.delete('/:id', Auth.Verify, Auth.Admin, meal.deleteMeal);

export default router;