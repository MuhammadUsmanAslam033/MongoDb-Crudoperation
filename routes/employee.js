var express = require('express')
const router = express.Router()


const EmployeeController = require ('../controllers/EmployeeController')

router.get('/', EmployeeController.index)
router.post('/', EmployeeController.show)
router.post('/store', EmployeeController.store)
router.post('/update', EmployeeController.update)
router.post('/delete', EmployeeController.destroy)
module. exports = router 
