<<<<<<< HEAD
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
=======
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
>>>>>>> feature/homepage-view

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
<<<<<<< HEAD
      autoIncrement: true,
=======
      autoIncrement: true
>>>>>>> feature/homepage-view
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
<<<<<<< HEAD
        len: [1],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "post",
        key: "id",
      },
    },
=======
        len: [1]
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id'
      }
    }
>>>>>>> feature/homepage-view
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
<<<<<<< HEAD
    modelName: "comment",
=======
    modelName: 'comment'
>>>>>>> feature/homepage-view
  }
);

module.exports = Comment;
