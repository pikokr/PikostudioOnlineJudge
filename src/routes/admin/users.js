const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('admin/users')
})

module.exports = router
