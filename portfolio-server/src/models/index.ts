const Sequelize = require('sequelize');
import database from '../config/connections';

export const User = database.define('user', {
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
    unique: true,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  bio: Sequelize.STRING,
  image: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
})