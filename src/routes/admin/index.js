const router = require('express').Router()

router.get('/', (req, res) => res.render('admin'))

router.use('/users', require('./users'))

module.exports = router
