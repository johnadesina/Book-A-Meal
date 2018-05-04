import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import meal from './routes/meal';
import menu from './routes/menu';
import order from './routes/order';

const app = express();
app.use(logger('dev'));
const jsonParser = bodyParser.json();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/meals', jsonParser, meal);
app.use('/api/v1/menus', jsonParser, menu);
app.use('/api/v1/orders', jsonParser, order);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome To Book a Meal API!!!',
}));

export default app;