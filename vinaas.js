var express = require('express');
var serveStatic = require('serve-static');
var parser = require('markdown-parse');
var fs = require('fs');
var app = express();


//var publicPath = __dirname + '/public/';
var content = fs.readFileSync(__dirname + '/metal/_posts/2012-08-20-first-post.md', 'utf8');
// /app.use(serveStatic(publicPath, {'index': ['index.html', 'default.html', 'default.htm']}));
app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });


app.use(express.static(__dirname + '/public/'));
app.use('/admincp', express.static(__dirname +'/admincp/'))
app.get('/getSomeFileMd', function(req, res) {
  parser(content, function(err, result) {
    var obj = {};
    obj.att = result.attributes;
    obj.content = result.body;
    res.send(JSON.stringify(obj));

    // console.log('the original body:');
    // console.log(result.body);
    //
    // console.log('the html:');
    // console.log(result.html);
    //
    // console.log('the front matter:');
    // console.dir(result.attributes);
  })

});
app.get('/admin', function(req, res) {
  res.redirect('./admincp/index.html');
});

console.log('Run server at port 2000'); //
app.listen(2000);
