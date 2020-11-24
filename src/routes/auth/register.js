const router = require('express').Router()

router.post('/', (req, res) => {
    res.redirect('/')
})

router.get('/', (req, res) => {
    res.render('auth/register', {
        messages: req.flash('error')
    })
})

module.exports = router