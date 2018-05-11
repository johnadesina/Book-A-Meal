import db from '../models/index';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Sequelize from 'sequelize';

require('dotenv').config();

const user = db.Users.id

class User {
  static signup(req, res) {
    const {
      username, firstName, lastName, email, phoneno, password,
    } = req.body;
    db.Users.find({
      where: {
           email ,
           username ,
           phoneno
      }
    })
      .then((found) => {
        if (found) {
          let email;
          let username;
          let phoneno;
          if (found.email === email) {
            email = 'Email is already in use';
          }
          if (found.username === username) {
            username = 'Username already taken';
          }
          if (found.phoneno === phoneno) {
            phoneNumber = 'Phone number already already in use';
          }
          return res.status(409).send({
            email,
            username,
            phoneno
          });
        }
      });
    return db.Users.create({
      username,
      email,
      firstName,
      lastName,
      phoneno,
      password: bcrypt.hashSync(password, 10),
    })
      .then((user) => {
        const newUser = {
          id: db.Users.id,
          username: db.Users.username,
          firstName: db.Users.firstName,
          lastName: db.Users.lastName,
          email: db.Users.email,
          phoneno: db.Users.phoneno
        };
        res.status(201).send({
          message: 'Signup Successful',
          newUser
        });
      })
    
      .catch(() => {
        res.status(500).send({
          message: 'some error occured!'
        });
      });
  }
 
  static signin(req, res) {
    
    db.Users.findOne({
      where: {
           username: req.body.username ,
           //email: req.body.username ,
           //phoneno: req.body.username  
      }
    })
      .then((foundUser) => {
        if (!foundUser) {
          res.status(400).send({
            message: 'Incorrect Signin Credentials!'
          });
        } else if (bcrypt.compareSync(req.body.password, foundUser.password)) {
           const user = {
             id: foundUser.id,
             role: foundUser.role,
             username: foundUser.username
           };
          const token = jwt.sign(user, process.env.SECRET_KEY , {
            expiresIn: '24h'
          });
          return res.status(200).send({
            message: 'Signin Successful!',
            Token: token
          });
        } else {
          res.status(400).send({
            message: 'Incorrect Password'
          });
        }
      });
  }
}
export default User;