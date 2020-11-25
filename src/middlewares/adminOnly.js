module.exports = (req, res, next) => {
    if (!req.user.admin) {
        req.flash('error', '이 페이지는 관리자 전용 페이지에요!')
        return res.redirect('/')
    }
    next()
}