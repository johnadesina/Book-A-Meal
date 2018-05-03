export default (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneno: {
        type: DataTypes.INTEGER
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
  confirmPassword: {
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
    }); 
    Users.hasMany(models.Menu, {
      foreignKey: 'userId',
    });     
  };
  return Users;
};