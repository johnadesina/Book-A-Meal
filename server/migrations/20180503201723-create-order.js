'use strict';
module.exports =  {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Order', {
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
        mealid: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        mealName: {
          allowNull: false,
          type: Sequelize.STRING
        },
        mealPrice: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
      Total: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Order');
  }
};