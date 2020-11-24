const express = require('express')

require('./util/overrideLogger')

const app = express()

app.set('view engine', 'pug')

app.set('views', './views')

app.use('/static', express.static('./static'))

app.use('/', require('./routes'))

app.listen(3000, () => console.log('Listening'))
