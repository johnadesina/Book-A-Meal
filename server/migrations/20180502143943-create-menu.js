export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Menu', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
         type: Sequelize.INTEGER,
         allowNull: false,
         references: {
          model: 'Users',
          key: 'id',
          as: 'userId'
        }
      },
      menuDate: {
        type: Sequelize.STRING,
        allowNull: false
      },
      menuName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      firstOp: {
        mealId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
          model: 'Meal',
          key: 'id',
          as: 'mealId'
        }
        },
        mealName: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {
          model: 'Meal',
          key: 'mealName',
          as: 'mealName'
        }
        },
        mealPrice: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
          model: 'Meal',
          key: 'mealPrice',
          as: 'mealPrice'
        }
        }
      },
      secondOp: {
         mealId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
          model: 'Meal',
          key: 'id',
          as: 'mealId'
        }
        },
        mealName: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {
          model: 'Meal',
          key: 'mealName',
          as: 'mealName'
        }
        },
        mealPrice: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
          model: 'Meal',
          key: 'mealPrice',
          as: 'mealPrice'
        }
        }
      },
      thirdOp: {
        mealId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
          model: 'Meal',
          key: 'id',
          as: 'mealId'
        }
        },
        mealName: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {
          model: 'Meal',
          key: 'mealName',
          as: 'mealName'
        }
        },
        mealPrice: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
          model: 'Meal',
          key: 'mealName',
          as: 'mealPrice'
        }
        }
      },
      fourthOp: {
        mealId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
          model: 'Meal',
          key: 'id',
          as: 'mealId'
        }
        },
        mealName: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {
          model: 'Meal',
          key: 'mealName',
          as: 'mealName'
        }
        },
        mealPrice: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
          model: 'Meal',
          key: 'mealPrice',
          as: 'mealPrice'
        }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Menu');
  }
};