<<<<<<< HEAD
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
=======
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
>>>>>>> feature/homepage-view

class Vote extends Model {}

Vote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
<<<<<<< HEAD
      autoIncrement: true,
=======
      autoIncrement: true
>>>>>>> feature/homepage-view
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
<<<<<<< HEAD
        model: "user",
        key: "id",
      },
=======
        model: 'user',
        key: 'id'
      }
>>>>>>> feature/homepage-view
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
<<<<<<< HEAD
        model: "post",
        key: "id",
      },
    },
=======
        model: 'post',
        key: 'id'
      }
    }
>>>>>>> feature/homepage-view
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
<<<<<<< HEAD
    modelName: "vote",
=======
    modelName: 'vote'
>>>>>>> feature/homepage-view
  }
);

module.exports = Vote;
