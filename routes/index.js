const routes = require('express').Router()

routes.get('/', ((req, res)=> {
    res.send('cek masuk')
}))


module.exports = routes