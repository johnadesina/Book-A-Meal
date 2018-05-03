export default (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    menuDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    menuName: {
        type: DataTypes.STRING,
        allowNull: false
    },
        mealOne: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mealTwo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        secondPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mealThree: {
            type: DataTypes.STRING,
            allowNull: false
        },
        thirdPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mealFour: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fourthPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
  });
  Menu.associate = models => {
    Menu.belongsTo(models.Users, {
      foreignKey: 'userId',
    });
    Menu.hasMany(models.Meal, {
      foreignKey: 'mealId',
    });
  };
  return Menu;
};