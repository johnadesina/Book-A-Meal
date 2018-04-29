import Orders from '../models/order';

const orders = Orders;

class Order {
	get(req,res){
		return res.json({
			order: orders,
			error: false
		});

	}

	add(req,res){
		if(!req.body.name){
		  return res.json({
		  	message: 'food name missing',
		  	error: true
		  });	
		}

		orders.push(req.body)
		return res.json({
			message: 'Success',
			error: false
		});

		}

	put(req,res){
		for(let i=0; i < orders.length; i++){
			if(orders[i].orderid === parseInt(req.params.orderid, 10)){
				orders[i].mealOp1 = req.body.mealOp1;
				orders[i].mealOp2 = req.body.mealOp2;
				orders[i].mealOp3 = req.body.mealOp3;
				orders[i].total = req.body.total;
				return res.json({
					message: 'Success',
					error: false
				});
			}
		}
		return res.status(404).json({
			message: 'order not found',
			error: true
		});
	}

	getA(req,res){
		for(let i=0; i < orders.length; i++){
			if(orders[i].orderid === parseInt(req.params.orderid, 10)){
				return res.json({
					order: orders[i],
					message: 'success',
					error: false
				});
			}
		}
		return res.status(404).json({
			message: 'order not found',
			error: true
		});
	}	

}


const orderController = new Order();
export default orderController;