class Validation {
  static signup(req, res, next) {
    const {
 username, firstname, lastname, email, phoneno, password, confirmPassword } = req.body;
    if (!username || typeof username !== 'string') {
      return res.status(400).send({
        username: 'Please Enter Username'
      });
    } else if (!firstname || typeof fullName !== 'string') {
      return res.status(400).send({
        email: 'Please Enter Your First Name'
      });
    } else if (!lastname || typeof fullName !== 'string') {
      return res.status(400).send({
        email: 'Please Enter Your Last Name'
      });
    }else if (!email || typeof email !== 'string') {
      return res.status(400).send({
        email: 'Please Enter Email'
      });
    } else if (!phoneno) {
      return res.status(400).send({
        email: 'Please Enter Your Phone Number'
      });
    } else if (!password) {
      return res.status(400).send({
        password: 'Please Enter password'
      });
    } else if (password.length < 6) {
      return res.status(400).send({
        password: 'Password is too short!'
      });
    } else if (password !== confirmPassword) {
      return res.status(400).send({
        password: 'password does not match'
      });
    } next();
  }
  static signin(req, res, next) {
    const { username, password } = req.body;
    if (!username || typeof username !== 'string') {
      res.status(400).send({
        message: 'Please enter Your username or email'
      });
    } else if (!password) {
      res.status(400).send({
        message: 'Please enter Your Password'
      });
    } next();
  }
  static createMeal(req, res, next) {
    const {
		userId, mealName, mealPrice
} = req.body;
    if (!mealName || typeof eventType !== 'string') {
      res.status(400).send({
        message: 'Please Provide a meal name'
      });
    } else if (!mealPrice || typeof mealPrice !== 2) {
      res.status(400).send({
        message: 'Please write the price of the meal'
      });
    } next();
  }
  static createMenu(req, res, next) {
	  const {
		  mealName, mealPrice, mealId, menuDate, menuName, userId, firstOp, secondOp, thirdOp, fourthOp}
	= req.body;
    if (!mealName || typeof mealName !== 'string') {
      res.status(400).send({
        message: 'Please Add Name Of Meal!'
      });
    } else if (!mealPrice || typeof mealPrice !== 2) {
      res.status(400).send({
        message: 'Please Add Description!'
      });
    } else if (!menuDate || typeof menuDate !== 'string') {
      res.status(400).send({
        message: 'Please Add Date!'
      });
    } else if (!userId) {
      return res.status(400).send({
        message: 'Field Cannot Be Empty!'
      });
    }  next();
  }
 static makeOrder(req, res, next) {
    const {
      mealName, mealPrice, userId, Total, mealOrder}
  = req.body; 
    if (!mealName || typeof mealName !== 'string') {
      res.status(400).send({
        message: 'Please Add Name Of Meal!'
      });
    } else if (!mealPrice || typeof mealPrice !== 2) {
      res.status(400).send({
        message: 'Please Add Description!'
      });
    }else if (!userId) {
      return res.status(400).send({
        message: 'Field Cannot Be Empty!'
      });
    }  next();
}
};
export default Validation;
