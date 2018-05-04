import Meals from '../models/meal';

const meals = Meals;

class Meal {
	getMeals(req,res){
		return res.status(200).json({
			meal: meals,
			error: false
		});
	}

	addMeal(req,res){
		if(!req.body.name){
		  return res.status(200).json({
		  	message: 'name of meal missing',
		  	error: true
		  });	
		}

		meals.push(req.body)
		return res.status(200).json({
			message: 'Success',
			error: false
		});
		}

	putMeal(req,res){
		meals.map(meal => {
			if(meal.id === parseInt(req.params.id, 10)){
				meal.name = req.body.name;
				meal.Price = req.body.Price;
				return res.status(200).json({
					message: 'Success',
					error: false
				});
			}
		});
		return res.status(404).json({
			message: 'meal not found',
			error: true
		});
	}

	deleteMeal(req,res){
			meals.splice(meals.findIndex(i => i.id === parseInt(req.params.id, 10)),1)
				return res.status(200).json({
					message: 'Success',
					error: false
				});
		return res.status(404).json({
			message: 'meal not found',
			error: true
		});
	}

	getMeal(req,res){
		meals.map(meal => {
			if(meal.id === parseInt(req.params.id, 10)){
				return res.status(200).json({
					meal: meal,
					message: 'success',
					error: false
				});
			}
		});
		return res.status(404).json({
			message: 'meal not found',
			error: true
		});
	}	
}

const mealController = new Meal();
export default mealController;