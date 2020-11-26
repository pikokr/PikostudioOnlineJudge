const router = require('express').Router()
const Users = require('../../models/User')

router.get('/', async (req, res) => {
    res.render('admin/users', {
        users: await Users.find()
    })
})

router.get('/:id', async (req, res, next) => {
    const u = await Users.findOne({id: req.params.id})
    if (!u) return next()
    res.render('admin/users/view', {
        user: u
    })
})

module.exports = router
