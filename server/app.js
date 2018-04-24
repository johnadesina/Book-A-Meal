import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import meal from './routes/meal';
import menu from './routes/menu';
import order from './routes/order';








// Set up the express app
const app = express();


app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/meals', meal);
app.use('/api/v1/mmenus', menu);
app.use('/api/v1/orders', order);



// Setup a default catch-all route that sends back a welcome message in JSON format.

app.listen('3000', () => {
console.log('Running on port 3000...')
});

export default app;