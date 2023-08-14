const { Sequelize, DataTypes } = require('sequelize');
const db = require("../db");

const Trainer = db.define("Trainer", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Trainer;

// One To Many association between Trainer and Pokemon
const Pokemon = require("./Pokemon");
Trainer.hasMany(Pokemon);