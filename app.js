var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');

// WeChat
var wechat = require('wechat');
var wechatApi = require('wechat-api');
var wechatOAuth = require('wechat-oauth');

// routes controllers services
var routes = require('./routes/index');
var users = require('./routes/users');

var wechatMsg = require('./controllers/wechatMsg');

var config = require('./services/config');


var app = express();


// config init
var mainConfig = config.load('main', './config/main.json', function (err) {
	if (err) {
		console.error(err);
		process.exit(1);
	}
}).data.main;

//init wechat menu config
var menuConfig = config.load('wechatMenu', './config/wechatMenu.json', function (err) {
	if (err) {
		console.error(err);
		process.exit(1);
	}
}).data.wechatMenu;

var api = new wechatApi(mainConfig.wechat.appId, mainConfig.wechat.appSecret);
wechatApi.myApi = api;
var auth = new wechatOAuth(mainConfig.wechat.appId, mainConfig.wechat.appSecret);
wechatOAuth.myAuth = auth;
// WeChat menu
wechatApi.myApi.createMenu(menuConfig.menu, function (err, result) {
	console.log(err);
	console.log(result);
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//WeChat req
var wechatConfig = {
	token: mainConfig.wechat.token,
	appid: mainConfig.wechat.appId,
	encodingAESKey: mainConfig.wechat.encodingAESKey
};

app.use('/wechat', wechat(wechatConfig)
    .text(wechatMsg.text)
    .image(wechatMsg.image)
    .voice(wechatMsg.voice)
    .video(wechatMsg.video)
    .location(wechatMsg.location)
    .link(wechatMsg.link)
    .event(wechatMsg.event)
    .device_text(wechatMsg.device_text)
    .device_event(wechatMsg.device_event)
    .middlewarify());

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

//app.set('port', process.env.PORT || 3000);
app.set('port', 80);
var server = app.listen(app.get('port'), function () {
	logger('Express server listening on port ' + server.address().port);
});


module.exports = app;
