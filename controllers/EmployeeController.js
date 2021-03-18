const Employee = require('../models/Employee')
//show the list of Employees

const index = (req, res, next)=> {
    Employee.find().then(response=> {
res.json({
    response
})
    })
.catch(error=> {
    res.json({
        message: 'an error!'
    })
})
    
}

//show employees by ID
const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response =>{
        res.json({
            response
    })
})
.catch(error =>{
    res.json({
        message: 'an error!'
    })
})
}
//store function to add new employees to database
const store = (req, res, next) =>
{
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.email,
        phone: req.body.phone,
    })

    employee.save()
    .then(respnse => {
        res.json({
            message: 'Employee Added succesffuly!'
        })
    })
    //promise
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}
//update employee by their ID
const update = (req, res, next) => {
    let employeeID = req.body.employeeID
    let updatedData ={
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }
    Employee.findByIdAndUpdate(employeeID, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'Employee updated succesfuly!'
        })
     } )
     .catch(error => {
         res.json({
             message: "an error occured!"
         })
     })
    }
     //delete an employee 
     const destroy = (req, res, next) =>
     {
         let employeeID = req.body.employeeID
         Employee.findOneAndRemove(employeeID)
         .then(() => {
             req.json({
                 message: 'employee deleted'
             })
         })
         .catch(error => {
             req.json({
                 message: 'an error!'
             })
         })
     }
     module.exports = {
         index, show, store, update, destroy
     }
