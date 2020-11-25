const pwUtil = require('../../util/password')
const router = require('express').Router()
const User = require('../../models/User')

router.post('/', async (req, res) => {
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

    if (await User.findOne({id: req.body.id})) {
        req.flash('error', '해당 아이디를 누가 이미 사용하고 있어요!')
        return res.redirect('/auth/register')
    }

    const salt = pwUtil.generateSalt()

    const user = new User()

    user.id = req.body.id

    user.password = pwUtil.encryptPassword(req.body.pw, salt)

    user.salt = salt

    await user.save()

    req.flash('success', '가입이 완료되었어요! 이제 로그인 해주세요!')
    res.redirect('/auth/login')
})

router.get('/', (req, res) => {
    res.render('auth/register')
})

module.exports = router