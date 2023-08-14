const db = require("../db");
const {STRING, FLOAT, INTEGER } = require("sequelize");

const student = db.define("student", {
  firstName: {
    type: STRING,
    allowEmpty: false,
    allowNull: false
  },
  lastName: {
    type: STRING,
    allowEmpty: false,
    allowNull: false
  },
  email: {
    type: STRING,
    allowEmpty: false,
    allowNull: false,
    validate: {
      verifyEmail(email) {
        if (!email.includes("@")) {
          throw Error("invalid email address");
        }
      }
    }
  },
  imageUrl: {
    type: STRING,
    defaultValue: ""
  },
  magicalAbilityScore: {
    type: FLOAT,
    allowEmpty: false,
    allowNull: false,
    validate: {
      verifyScore(score) {
        if (score < 0 || score > 10) {
          throw Error("invalid magical ability score");
        }
      }
    }
  }
})

module.exports = student;