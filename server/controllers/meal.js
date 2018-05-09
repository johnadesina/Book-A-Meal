import db from '../models/index';
import jwt from 'jsonwebtoken';
import Sequelize from 'sequelize';
import Auth from '../middlewares/authentication';
import bcrypt from 'bcryptjs';


const user = db.Users.id

class MealGiver {
	static getMeals(req,res){
	return db.Meal
      .all()
      .then((Meals) => {
        res.status(200).send({
          message: 'Successful',
          Meals
        });
      });
	}

	addMeal(req,res){
	  const {
      mealName, mealPrice, userId
    } = req.body;
    db.Meal.find({
      where: {
           mealName
      }
    })
      .then((found) => {
        if (found) {
          let mealName
          if (found.mealName === mealName) {
            email = 'Type of meal already exits';
          }
          return res.status(404).send({
            mealName
          });
        }
      });
    return db.Meal.create({
      userId,
      mealPrice,
      mealName
    })
      .then((meal) => {
        const newMeal = {
          id: db.Meal.id,
          mealPrice: db.Meal.mealPrice,
          mealName: db.Meal.mealName,
          userId: user
        };
        res.status(201).send({
          message: 'Meal Added Successfully',
          newMeal
        });
      })
    
      .catch(() => {
        res.status(500).send({
          message: 'some error occured!'
        });
      });
		}

	putMeal(req,res){
	const {userId, mealName, mealPrice} = req.body;
    const Decoded = jwt.decode(req.headers.token);
    db.Meal.findOne({
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
        return db.Meal
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
	db.Meal.find ({
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
      return db.Meal
        .destroy()
        .then(() => res.status(200).send({
            message: 'Meal has been deleted'
        }))
      }
    })
    .catch(error => res.status(400).send(error));
	}

	getMeal(req,res){
		return db.Meal
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