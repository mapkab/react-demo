var express=require('express'),
path=require('path'),
webpack=require('webpack'),
config=require('../webpack.config.js'),
webpackDevMiddleware=require('webpack-dev-middleware'),
webpackHotMiddleware=require('webpack-hot-middleware');


var app=express();

var compiler=webpack(config);

var port =3000;

app.use(webpackDevMiddleware(compiler,
	{
		noInfo:true,
		publicPath:config.output.publicPath
	}));
app.use(webpackHotMiddleware(compiler));


app.use(express.static('./dist'));

app.use('/',(req,res)=>res.sendFile(path.resolve('index.html')));

app.listen(port,(err)=>err?err:console.log('express server listening on port',port));