// Creating Models for Pokemon

const { Sequelize, DataTypers } = require("sequelize");
const db = require("../db");

const Pokemon = db.define("Pokemon", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    trainer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },

});

module.exports = Pokemon;

// Define the association in models
const Trainer = require("./Trainer");

Pokemon.belongsTo(Trainer);