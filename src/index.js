const express = require('express')
const session = require('express-session')
const passport = require('passport')
const mongoose = require('mongoose')
const User = require('./models/User')
const LocalStrategy = require('passport-local').Strategy
const pwUtil = require('./util/password')
const flash = require('connect-flash')

mongoose.set('useCreateIndex', true)

passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, res) => {
        done(err, res)
    })
})

passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'pw',
    session: true,
    passReqToCallback: true
}, (req, id, pw, done) => {
    User.findOne({id}, (err, user) => {
        if (err) return done(err)
        if (!user) return done(null, false, {message: '유저정보가 존재하지 않습니다.'})
        return user.comparePassword(pwUtil.encryptPassword(pw, user.salt), (err, isMatch) => {
            if (isMatch) {
                return done(null,user)
            }
            return done(null, false, {message: '유저정보가 존재하지 않습니다.'})
        })
    })
}))

require('./util/overrideLogger')

const app = express()

app.config = require('../config.json')

app.set('view engine', 'pug')

app.set('views', './views')

app.use('/static', express.static('./static'))

app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: app.config.secrets.session,
    resave: false,
    saveUninitialized: false
}))

app.use(flash())

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
