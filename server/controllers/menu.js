import model from '../models/menu';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Sequelize from 'sequelize';
import Auth from '../middlewares/authentication';

const menus = model.Menu;

class SetMenu {
	getMenus(req,res){
		return menus
      .all()
      .then((getMenus) => {
        res.status(200).send({
          message: 'Successful',
          getMenus
        });
      });
	}

	addMenu(req,res){
	const {menuDate, menuName, userId, mealOne, firstPrice, mealTwo, secondPrice, mealThree, thirdPrice, mealFour, fourthPrice} = req.body;
    const Decoded = jwt.decode(req.headers.token);
    menu.create({
      userId: req.decoded.id,
      menuName,
      menuDate,
      mealOne,
      firstPrice,
      mealTwo,
      secondPrice,
      mealThree,
      thirdPrice,
      mealFour,
      fourthPrice
    })
      .then(created => res.status(200).send({
        message: 'Menu Added Successfully',
        created
      }))
      .catch(err => res.status(500).send({
        message: 'Error occured!'
      }));
		}


	getMenu(req,res){
	return menus
    .findById(req.params.id).then(found => {
      if (!found) {
        res.status(404).send({
          message: 'menu not Found!'
        })
      } else {
        res.status(200).send(found)
      }
    })
    .catch(error => res.status(400).send(error))
	}	

}


const menuController = new SetMenu();
export default menuController;