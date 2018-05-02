'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Order', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId'
        }
      },
      mealOrder: {
        mealid: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
          model: 'Meal',
          key: 'id',
          as: 'mealId'
        }
        },
        mealName: {
          allowNull: false,
          type: Sequelize.STRING,
          references: {
          model: 'Meal',
          key: 'mealName',
          as: 'mealName'
        }
        },
        mealPrice: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
          model: 'Meal',
          key: 'mealPrice',
          as: 'mealPrice'
        }
        }
      },
      Total: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
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
    return queryInterface.dropTable('Order');
  }
};