module.exports = (req, res, next) => {
    if (!req.user) {
        req.flash('error', '페이지에 접근하려면 로그인해야 합니다')
        return res.redirect('/auth/login')
    }
    next()
}