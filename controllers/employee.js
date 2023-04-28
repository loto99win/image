const Employee = require('../models/employee');

const employeeControllers = {

    // add employee
    addEmployee : async(req, res) => {

        const emailInput = req.body.email;
        const checkEmailExist = await Employee.findOne({ email: emailInput });
        
        if(checkEmailExist === null){
            const employeeObject = {
                _id: req.body._id,
                fn: req.body.fn,
                ln: req.body.ln,
                email: emailInput,
                dob: req.body.dob,
                gender: req.body.gender,
                education: req.body.education,
                company: req.body.company,
                experience: req.body.experience,
                package: req.body.package
            }

            const newEmployee = new Employee(employeeObject);
            await newEmployee.save()
            .then(result => {
                return res.status(200).json(result);
            })
            .catch(error => {
                return res.status(400).json(error);
            });
        } else {
            return res.status(400).json({
                Error: 'Email already in use'
            })
        }
    },

    // get all employees
    getAllEmployees: async(req, res) => {
        const allEmployees = await Employee.find();
        return res.status(200).json(allEmployees);
    },

    // delete employee by id
    deleteEmployee: async(req, res) => {
        const result = await Employee.findByIdAndDelete(req.params.id);
        return res.status(200).json(result);
    },

    // update employee by id, data
    updateEmployee: async(req, res) => {
        const checkId = req.params.id;
        const condition = {
            _id: checkId
        }
        const update = {
            fn: req.body.fn,
            ln: req.body.ln,
            email: req.body.email,
            dob: req.body.dob,
            gender: req.body.gender,
            education: req.body.education,
            company: req.body.company,
            experience: req.body.experience,
            package: req.body.package
        };
        await Employee.findOneAndUpdate(condition, update, {
            new: true,
        }).then((result) => {
            console.log(result);
            return res.status(200).json(result);
        }).catch(error => {
            console.log(error);
            return res.status(400).json(error);
        })
    }
}

module.exports = employeeControllers;