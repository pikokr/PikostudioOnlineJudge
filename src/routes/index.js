const router = require('express').Router()
const loginRequired = require('../middlewares/loginRequired')
const adminRequired = require('../middlewares/adminOnly')

router.get('/', (req, res) => {
    res.render('main/index')
})

router.use('/auth', require('./auth'))
router.use('/admin', loginRequired, adminRequired, require('./admin'))

module.exports = router
