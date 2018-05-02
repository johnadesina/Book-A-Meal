import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import meal from './routes/meal';
import menu from './routes/menu';
import order from './routes/order';
import user from './routes/user';

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/meals', meal);
app.use('/api/v1/menus', menu);
app.use('/api/v1/orders', order);
app.use('/api/v1/users', user);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome To Book a Meal API!!!',
}));

export default app;