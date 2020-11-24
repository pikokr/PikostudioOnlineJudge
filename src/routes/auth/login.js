const router = require('express').Router()
const passport = require('passport')

router.post('/', passport.authenticate('local', {
    failureRedirect: '/auth/login',
    failureFlash: true,
}),(req, res) => {
    res.redirect('/')
})

router.get('/', (req, res) => {
    res.render('auth/login', {
        messages: req.flash('error')
    })
})

module.exports = router