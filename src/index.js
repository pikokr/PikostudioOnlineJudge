const express = require('express')

require('./util/overrideLogger')

const app = express()

app.set('view engine', 'pug')

app.listen(3000, () => console.log('Listening'))
