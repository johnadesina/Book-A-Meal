import users from '../controllers/user';
import express from 'express';
import validate from '../middlewares/validations';


const router = express.Router();

router.post('/', validate.signup, users.signup);
router.post('/login', validate.signin, users.signin);

export default router;