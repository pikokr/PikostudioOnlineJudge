const redis = require('redis')
const config = require('../config.json')

const client = redis.createClient(config)


client.on('error', e => null)

module.exports = client
