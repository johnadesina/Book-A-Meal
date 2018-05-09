class Validation {
  static signup(req, res, next) {
    const {
 username, firstName, lastName, email, phoneno, password} = req.body;
    if (!username || typeof username !== 'string') {
      return res.status(400).send({
        username: 'Please Enter Username'
      });
    } else if (!firstName || typeof firstName !== 'string') {
      return res.status(400).send({
        email: 'Please Enter Your First Name'
      });
    } else if (!lastName || typeof lastName !== 'string') {
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
    }  next();
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
    if (!mealName || typeof mealName !== 'string') {
      res.status(400).send({
        message: 'Please Provide a meal name'
      });
    } else if (!mealPrice || isNaN(mealPrice)) {
      res.status(400).send({
        message: 'Please write the price of the meal'
      });
    } next();
  }
  static createMenu(req, res, next) {
	  const {
		  menuDate, menuName, userId, mealOne, firstPrice, mealTwo, secondPrice, mealThree, thirdPrice, mealFour, fourthPrice}
	= req.body;
    if (!menuName || typeof mealName !== 'string') {
      res.status(400).send({
        message: 'Please Add Name Of Meal!'
      });
    } else if (!menuDate || typeof mealDate !== 'string') {
      res.status(400).send({
        message: 'Please Add Date!'
      });
    } else if (!firstPrice || NaN ) {
      res.status(400).send({
        message: 'Please Add first price!'
      });
    } else if (!secondPrice || NaN) {
      res.status(400).send({
        message: 'Please Add second price!'
      });
    } else if (!thirdPrice || NaN) {
      res.status(400).send({
        message: 'Please Add third price!'
      });
    } else if (!fourthPrice || NaN) {
      res.status(400).send({
        message: 'Please Add fourth price!'
      });
    }else if (!mealOne || typeof menuDate !== 'string') {
      res.status(400).send({
        message: 'Please Add meal one!'
      });
    } else if (!mealTwo || typeof menuDate !== 'string') {
      res.status(400).send({
        message: 'Please Add meal two!'
      });
    } else if (!mealThree || typeof menuDate !== 'string') {
      res.status(400).send({
        message: 'Please Add meal three!'
      });
    } else if (!mealFour || typeof menuDate !== 'string') {
      res.status(400).send({
        message: 'Please Add four!'
      });
    }else if (!userId) {
      return res.status(400).send({
        message: 'Field Cannot Be Empty!'
      });
    }  next();
  }
 static makeOrder(req, res, next) {
    const {
      mealName, mealPrice, userId, Total, mealId}
  = req.body; 
    if (!mealName || typeof mealName !== 'string') {
      res.status(400).send({
        message: 'Please Add Name Of Meal!'
      });
    } else if (!mealPrice || NaN) {
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
