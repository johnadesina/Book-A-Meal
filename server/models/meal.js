export default (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    userId: {
    	type: DataTypes.INTEGER,
    	allowNull: false,
    	unique: true
    },
    mealName: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    mealPrice: {
    	type: DataTypes.STRING,
    	allowNull: false
    }
  });
  Meal.associate = models => {
    Meal.belongsTo(models.Menu, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    Meal.hasMany(models.Order, {
    	foreignKey: 'userId'
    })
    Meal.belongsTo(models.Users, {
    	foreignKey: 'userId'
    })
  };
  return Meal;
};
