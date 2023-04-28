const express = require('express');
const router = express.Router();
const employeeControllers = require('../controllers/employee');

// add employee
router.post('/add', employeeControllers.addEmployee);
// get all employees
router.get('/all', employeeControllers.getAllEmployees);
// delete employee by id
router.delete('/delete/:id', employeeControllers.deleteEmployee);
// update employee by id
router.put('/update/:id', employeeControllers.updateEmployee);

module.exports = router;