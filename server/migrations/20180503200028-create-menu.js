  'use strict';
module.exports =  {
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
        mealOne: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        firstPrce: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        mealTwo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        secondPrice: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        mealThree: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        thirdPrice: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        mealFour: {
          type: Sequelize.STRING,
          allowNull: false,
       },
        fourthPrice: {
          type: Sequelize.INTEGER,
          allowNull: false,
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