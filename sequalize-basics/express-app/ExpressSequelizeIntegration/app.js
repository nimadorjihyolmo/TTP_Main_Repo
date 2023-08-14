require('dotenv').config();
const express = require("express");
const Sequelize = require ("sequelize");

const app = express();
const sequelize = new Sequelize(process.env.DATABASE_URL);

const Student = sequelize.define("student", {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
});

const Course = sequelize.define("Course", {
    course_name: Sequelize.STRING,
    course_code: Sequelize.STRING,
});

Student.belongsToMany(Course, { through: "StudentCourses"});
Course.belongsToMany(Student, { through: "StudentCourses"});