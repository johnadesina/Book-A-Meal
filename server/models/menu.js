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
    firstOp: {
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
    	}
    },
    secondOp: {
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
    	}
    },
    thirdOp: {
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
    	}
    },
    fourthOp: {
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
    	}
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