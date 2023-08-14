"use strict";
const router = require("express").Router();
const { WizardingSchool, Student} = require('../db/index');

// route to serve up all wizarding schools
router.get('/wizarding-schools', async (req, res, next) => {
    try {
        const wizardingSchools = await WizardingSchool.findAll();
        res.send(wizardingSchools);
    } catch (err) {
        next(err);
    }
});

// route to serve up a single wizarding school (based on its id), including that school's students
router.get('/wizarding-schools/:wizardingSchoolId', async (req, res, next) => {
    try {
        const school = await WizardingSchool.findByPk(req.params.wizardingSchoolId, {
            include: Student,
        });
        res.send(school);
    } catch (err) {
        next(err);
    }
});

// route to add a wizarding school
router.post("/wizarding-schools", async (req, res, next) => {
    try {
        const checkSchool = await WizardingSchool.findOne({ where: { name: req.body.name } });
        if (!checkSchool) {
            const school = await WizardingSchool.create(req.body);
            res.status(201).json(school);
        } else {
            res.status(400).json({ message: "School already exists" });
        }
    } catch (err) {
        next(err);
    }
});

// route to remove a wizarding school
router.delete("/wizarding-schools/:wizardingSchoolId", async (req, res, next) => {
    try {
        await WizardingSchool.destroy({ where: { id: req.params.wizardingSchoolId } });
        res.sendStatus(200);
    } catch (err) {
        next(err);
    }
});

// route to update a wizarding school
router.put("/wizarding-schools/:wizardingSchoolId", async (req, res, next) => {
    try {
        const checkSchool = await WizardingSchool.findOne({ where: { name: req.body.name } });
        if (checkSchool) {
            const school = await WizardingSchool.findByPk(req.params.wizardingSchoolId);
            await school.update(req.body);
            res.send(school);
        } else {
            res.status(400).json({ message: "School not found" });
        }
    } catch (err) {
        next(err);
    }
});

// route to serve up all students
router.get('/students', async (req, res, next) => {
    try {
        const students = await Student.findAll();
        res.send(students);
    } catch (err) {
        next(err);
    }
});

// route to serve up a single student (based on their id), including their wizarding school
router.get('/students/:studentId', async (req, res, next) => {
    try {
        const student = await Student.findByPk(req.params.studentId, {
            include: WizardingSchool,
        });
        res.send(student);
    } catch (err) {
        next(err);
    }
});

// route to add a student
router.post("/students", async (req, res, next) => {
    try {
        const newStudent = await Student.create(req.body);
        res.status(201).json(newStudent);
    } catch (err) {
        next(err);
    }
});

// route to remove a student
router.delete("/students/:studentId", async (req, res, next) => {
    try {
        await Student.destroy({ where: { id: req.params.studentId } });
        res.sendStatus(200);
    } catch (err) {
        next(err);
    }
});

// route to update a student
router.put("/students/:studentId", async (req, res, next) => {
    try {
        const student = await Student.findByPk(req.params.studentId);
        if (student) {
            await student.update(req.body);
            res.send(student);
        } else {
            res.status(400).json({ message: "Student not found" });
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;
