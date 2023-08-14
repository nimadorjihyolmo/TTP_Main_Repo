"use strict";

const {db} = require("./db");

// Require your models and make your associations

const { DataTypes } = require('sequelize');

const WizardingSchool = db.define('WizardingSchool', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: 'https://media.istockphoto.com/id/1220202380/vector/the-word-campus-isolated-colorful-letters-on-a-white-background.jpg?s=170667a&w=0&k=20&c=eZWQ1t4OeobfTMw7Tqdko4T0E9i81CbxgrAmHbctc-s=',
  },

  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT, 
    allowNull: false,
  },
});

const Student = db.define('Student', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: 'https://cdn-icons-png.flaticon.com/512/477/477103.png',
  },
  magicalAbilityScore: {
    type: DataTypes.FLOAT,
    validate: {
      min: 0,
      max: 10,
    },
  },
});

// Associations
Student.belongsTo(WizardingSchool); // each students belongs to a campus
WizardingSchool.hasMany(Student); // each campus has many students


// exporting models
module.exports = {
  db,
  WizardingSchool,
  Student,
};
