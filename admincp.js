var express = require('express')
var serveStatic = require('serve-static')

var app = express()
var publicPath = __dirname + '/admincp/'

app.use(serveStatic(publicPath, {'index': ['index.html', 'default.html', 'default.htm']}))
console.log('Run server at port 2000')  //
app.listen(2000)
