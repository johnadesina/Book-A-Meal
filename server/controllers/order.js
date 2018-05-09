import model from '../models/order';
import jwt from 'jsonwebtoken';
import Sequelize from 'sequelize';
import Auth from '../middlewares/authentication';
import bcrypt from 'bcryptjs';

//const orders = model.Order;

class MakeOrder {
	getOrders(req,res){
		return orders
      .all()
      .then((getAll) => {
        res.status(200).send({
          message: 'Successful',
          getAll
        });
      });
	}

	addOrder(req,res){
	const {mealName, mealPrice, userId, Total, mealId} = req.body;
    const Decoded = jwt.decode(req.headers.token);
    orders.create({
      userId: req.decoded.id,
      mealName,
      mealPrice,
      Total,
      mealId
    })
      .then(created => res.status(200).send({
        message: 'Order Added Successfully',
        created
      }))
      .catch(err => res.status(500).send({
        message: 'Error occured!'
      }));
		}

	putOrder(req,res){
		const {mealName, mealPrice, userId, Total, mealId} = req.body;
        const Decoded = jwt.decode(req.headers.token);
    orders.findOne({
      where: {
        userId: req.decoded.id,
      }
    })
      .then(orders => {
        if (!orders) {
          return res.status(404).send({
            message: 'order Not Found',
          });
        }
        return orders
          .update({
            userId: req.body.userId || center.userId,
            mealName: req.body.mealName || center.mealName,
            mealPrice: req.body.mealPrice || center.mealPrice,
            Total: req.body.Total || center.Total,
            mealId: req.body.mealId || center.mealId
          })
          .then(created => res.status(200).send({
            message: 'Update Successful',
            created
          }))
          .catch(err => res.status(500).send({
            message: 'Some error occured!'
          }));
      });
	}

	getOrder(req,res){
		return orders
    .findById(req.params.id).then(found => {
      if (!found) {
        res.status(404).send({
          message: 'order not Found!'
        })
      } else {
        res.status(200).send(found)
      }
    })
    .catch(error => res.status(400).send(error))
	}	

}


const orderController = new MakeOrder();
export default orderController;