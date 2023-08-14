// Sequelize setup
const { Sequelize } = require('sequelize');
const db = new Sequelize (
    process.env.DATABASE_URL || "postgres://localhost:5432/pokedex",
  {
    logging: false,
  }
);


// const sequelize = new Sequelize("pokedex", "postgres", "", {
//     host: "localhost",
//     dialect: "postgres",
// });

module.exports = { db, Sequelize };