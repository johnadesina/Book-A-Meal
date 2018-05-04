import Orders from '../models/order';

const orders = Orders;

class Order {
	getOrders(req,res){
		return res.status(200).json({
			order: orders,
			error: false
		});
	}

	addOrder(req,res){
		if(!req.body.name){
		  return res.status(404).json({
		  	message: 'food name missing',
		  	error: true
		  });	
		}
		orders.push(req.body)
		return res.status(200).json({
			message: 'Success',
			error: false
		});
		}

	putOrder(req,res){
		orders.map(order =>{
			if(order.orderid === parseInt(req.params.orderid, 10)){
				order.mealOp1 = req.body.mealOp1;
				order.mealOp2 = req.body.mealOp2;
				order.mealOp3 = req.body.mealOp3;
				order.total = req.body.total;
				return res.status(200).json({
					message: 'Success',
					error: false
				});
			}
		});
		return res.status(404).json({
			message: 'order not found',
			error: true
		});
	}

	getOrder(req,res){
		orders.map(order =>{
			if(order.orderid === parseInt(req.params.orderid, 10)){
				return res.status(200).json({
					order: order,
					message: 'success',
					error: false
				});
			}
		});
		return res.status(404).json({
			message: 'order not found',
			error: true
		});
	}	
}

const orderController = new Order();
export default orderController;