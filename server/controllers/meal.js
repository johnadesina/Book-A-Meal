import Meals from '../models/meal';

const meals = Meals;

class Meal {
	get(req,res){
		return res.status(200).json({
			meal: meals,
			error: false
		});

	}

	add(req,res){
		if(!req.body.name){
		  return res.json({
		  	message: 'name of meal missing',
		  	error: true
		  });	
		}

		meals.push(req.body)
		return res.json({
			message: 'Success',
			error: false
		});

		}

	put(req,res){
		for(let i=0; i < meals.length; i++){
			if(meals[i].id === parseInt(req.params.id, 10)){
				meals[i].name = req.body.name;
				meals[i].Price = req.body.Price;
				return res.json({
					message: 'Success',
					error: false
				});
			}
		}
		return res.status(404).json({
			message: 'meal not found',
			error: true
		});
	}

	delete(req,res){
		for(let i=0; i < meals.length; i++){
			if(meals[i].id === parseInt(req.params.id, 10)){
				meals.splice(i,1);
				return res.json({
					message: 'Success',
					error: false
				});
			}
		}
		return res.status(404).json({
			message: 'event not found',
			error: true
		});

	}

	getA(req,res){
		for(let i=0; i < meals.length; i++){
			if(meals[i].id === parseInt(req.params.id, 10)){
				return res.json({
					meal: meals[i],
					message: 'success',
					error: false
				});
			}
		}
		return res.status(404).json({
			message: 'meal not found',
			error: true
		});
	}	

}


const mealController = new Meal();
export default mealController;