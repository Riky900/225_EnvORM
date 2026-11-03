const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Komik = sequelize.define(
  'Komik',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'komik',
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Komik;
