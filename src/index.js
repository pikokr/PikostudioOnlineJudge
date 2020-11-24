const express = require('express')

require('./util/overrideLogger')

const app = express()

app.config = require('../config.json')

app.set('view engine', 'pug')

app.set('views', './views')

app.use('/static', express.static('./static'))

app.use((req, res, next) => {
    const origRender = res.render
    res.render = (view, options, callback) => origRender.call(res, view, {req, res, ...options}, callback)
    next()
})

app.use('/', require('./routes'))

app.listen(3000, () => console.log('Listening'))
