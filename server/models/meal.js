export default (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    mealName: {
       type: DataTypes.STRING,
       allowNul: false
   },
    mealPrice: {
        type: DataTypes.INTEGER,
        allowNul: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNul: false
    }
  });
  Meal.associate = models => {
    Meal.hasMany(models.Order, {
      foreignKey: 'orderId',
    });
    Meal.belongsTo(models.Users, {
      foreignKey: 'userId',
    });
    Meal.belongsTo(models.Menu, {
      foreignKey: 'menuId',
    });
  };
  return Meal;
};