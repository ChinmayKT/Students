const router = require('express').Router()

const auth = require('../middlewares/auth')
const studentController = require('../controllers/studentController')

router.route('/')
    .get(auth ,studentController.getStudents )
    .post(auth , studentController.createStudent)



router.route('/:id')
    .get(auth , studentController.getStudent)
    .put(auth , studentController.updateStudent)
    .delete(auth , studentController.deleteStudent)

module.exports = router


