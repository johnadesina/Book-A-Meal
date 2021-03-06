export default (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
            mealId: {
                type: DataTypes.INTEGER,
                allowNull: false
        },
            mealName: {
                type: DataTypes.STRING,
                allowNull: false
        },
            mealPrice: {
               type: DataTypes.INTEGER,
               allowNull: false
        },
        Total: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
  });
  Order.associate = models => {
    Order.belongsTo(models.Users, {
      foreignKey: 'userId'
    });
  };
  return Order;
};