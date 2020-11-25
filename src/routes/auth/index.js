const router = require('express').Router()

router.use('/login', require('./login'))
router.use('/register', require('./register'))

router.get('/logout', (req, res) => {
    req.logout()
    req.flash('success', '로그아웃이 완료되었어요!')
    res.redirect('/')
})

module.exports = router
