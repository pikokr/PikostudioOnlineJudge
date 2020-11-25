const router = require('express').Router()
const loginRequired = require('../middlewares/loginRequired')

router.get('/', (req, res) => {
    res.render('main/index')
})

router.use('/auth', require('./auth'))
router.use('/admin', loginRequired, require('./admin'))

module.exports = router
