const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const User = sequelize.define('user', {
    name: DataTypes.TEXT,
    favoriteColor: {
      type: DataTypes.TEXT,
      defaultValue: 'green',
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER,
    role: {
      type: DataTypes.ENUM('admin', 'user'),
      defaultValue: 'user',
    },
  });

const Data = sequelize.define('Data', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    discount: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    timestamps: false
  });

module.exports = {User, Data};
