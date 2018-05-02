import model from '../models/meal';
import jwt from 'jsonwebtoken';
import Sequelize from 'sequelize';
import Auth from '../middlewares/authentication';
import bcrypt from 'bcryptjs';

const meals = model.Meal;

class MealGiver {
	getMeals(req,res){
	return meals
      .all()
      .then((getMeals) => {
        res.status(200).send({
          message: 'Successful',
          getAll
        });
      });
	}

	addMeal(req,res){
		const {mealName, mealPrice, userId} = req.body;
    const Decoded = jwt.decode(req.headers.token);
    meals.create({
      userId: req.decoded.id,
      mealName,
      mealPrice
    })
      .then(created => res.status(200).send({
        message: 'Meal Added Successfully',
        created
      }))
      .catch(err => res.status(500).send({
        message: 'Error occured!'
      }));
		}

	putMeal(req,res){
	const {userId, mealName, mealPrice} = req.body;
    const Decoded = jwt.decode(req.headers.token);
    meals.findOne({
      where: {
        userId: req.decoded.id,
      }
    })
      .then(meals => {
        if (!meals) {
          return res.status(404).send({
            message: 'Meal Not Found',
          });
        }
        return meals
          .update({
            userId: req.body.userId || meals.userId,
            mealName: req.body.mealName || meals.mealName,
            mealPrice: req.body.mealPrice || meals.mealPrice
          })
          .then(created => res.status(200).send({
            message: 'meal update Successful',
            created
          }))
          .catch(err => res.status(500).send({
            message: 'Some error occured!'
          }));
      });
	}

	deleteMeal(req,res){
	meals.find ({
        where: {
          userId: req.decoded.id,
        }
      })
      .then(meals => {
        console.log(meals);
      if (!meals) {
        return res.status(400).send({
          message: 'Meal Not Found',
        });
      } else {
      return meals
        .destroy()
        .then(() => res.status(200).send({
            message: 'Meal has been deleted'
        }))
      }
    })
    .catch(error => res.status(400).send(error));
	}

	getMeal(req,res){
		return meals
    .findById(req.params.id).then(found => {
      if (!found) {
        res.status(404).send({
          message: 'meal not Found!'
        })
      } else {
        res.status(200).send(found)
      }
    })
    .catch(error => res.status(400).send(error))
	}	

}


const mealController = new MealGiver();
export default mealController;