const express = require('express')
const session = require('express-session')
const passport = require('passport')
const mongoose = require('mongoose')

require('./util/overrideLogger')

const app = express()

app.config = require('../config.json')

app.set('view engine', 'pug')

app.set('views', './views')

app.use('/static', express.static('./static'))

app.use(session({
    secret: app.config.secrets.session,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())

app.use(passport.session())

app.use((req, res, next) => {
    const origRender = res.render
    res.render = (view, options, callback) => origRender.call(res, view, {req, res, ...options}, callback)
    next()
})

app.use('/', require('./routes'))

mongoose.connect(app.config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(3000, () => console.log('Listening'))
})
