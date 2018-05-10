import db from '../models/index';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Sequelize from 'sequelize';
import Auth from '../middlewares/authentication';

const user = db.Users.id

class SetMenu {
	getMenus(req,res){
		return db.Menu
      .all()
      .then((Menus) => {
        res.status(200).send({
          message: 'Successful',
          Menus
        });
      })
      .catch(() => {
        res.status(500).send({
          message: 'some error occured!'
        });
      });
	}

	addMenu(req,res){
	const {menuDate, menuName, userId, mealOne, firstPrice, mealTwo, secondPrice, mealThree, thirdPrice, mealFour, fourthPrice} = req.body;
    db.Menu.create({
      userId,
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
    .then((menu) => {
        const newMenu = {
          userId: user,
          menuName: db.Menu.menuName,
          menuDate: db.Menu.menuDate,
          mealOne: db.Menu.mealOne,
          firstPrice: db.Menu.firstPrice,
          mealTwo: db.Menu.mealTwo,
          secondPrice: db.Menu.secondPrice,
          mealThree: db.Menu.mealThree,
          thirdPrice: db.Menu.thirdPrice,
          mealFour: db.Menu.mealFour,
          fourthPrice: db.Menu.fourthPrice
        }
         .then(created => res.status(200).send({
        message: 'Menu Added Successfully',
        created
      }))
    })
      .catch(err => res.status(500).send({
        message: 'Error occured!'
      }));
		
}

	getMenu(req,res){
	return db.Menu
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