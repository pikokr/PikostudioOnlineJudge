const pwUtil = require('../../util/password')
const router = require('express').Router()

router.post('/', (req, res) => {
    let err = false
    if (!req.body.id) {
        req.flash('error', '아이디 필드는 필수입니다.')
        err = true
    }
    if (!req.body.pw) {
        req.flash('error', '비밀번호 필드는 필수입니다.')
        err = true
    }
    if (!req.body.pw_re) {
        req.flash('error', '비밀번호 확인 필드는 필수입니다.')
        err = true
    }
    if (err) return res.redirect('/auth/register')
    if (req.body.pw !== req.body.pw_re) {
        req.flash('error', '비밀번호가 일치하지 않습니다.')
        return res.redirect('/auth/register')
    }

    const salt = pwUtil.generateSalt()

    console.log(salt)
})

router.get('/', (req, res) => {
    res.render('auth/register', {
        messages: req.flash('error')
    })
})

module.exports = router