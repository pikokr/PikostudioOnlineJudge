const router = require('express').Router()
const Users = require('../../models/User')

router.get('/', async (req, res) => {
    res.render('admin/users', {
        users: await Users.find()
    })
})

module.exports = router
