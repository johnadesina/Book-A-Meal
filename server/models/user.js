export default (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneno: {
        type: DataTypes.STRING
    },
    email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: 'Invalid Email Address'
      }
    }
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allownull: false,
    defaultValue: 'Regular'
  } 
  });
  Users.associate = function(models) {
    Users.hasMany(models.Order, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    Users.hasMany(models.Meal, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    }); 
    Users.hasMany(models.Menu, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });     
  };
  return Users;
};