'use strict';

/*var List = require('wechat').List;
List.add('main', [
    ['{1}.如何注册成为百城会员', function (info, req, res) {
        res.reply('微信中搜索“百城金融”公众号，关注公众号。点击百城账户，再点击注册百城，完善信息即可成为百城会员，推荐客户，获取奖励。');
    }],
    ['{2}.如何在微信上推荐客户', function (info, req, res) {
        res.reply('首先注册成为百城会员。点击百城账户，选择我的百城主页。点击新增客户。');
    }],
    ['{3}.如何查询推荐客户进度', function (info, req, res) {
        res.reply('点击百城账户，选择我的百城主页。输入客户名字。点击搜索。或者直接与当前处理人直接电话联系。');
    }]
],'请回复相应标号查看详情','----------------------------','详情请访问致电：028-67010408');*/


exports.text = function (message, req, res, next) {
	//if (message.Content === 'list') {
	//res.wait('main');
	//} else {
	res.reply('欢迎使用恒骏丰补胎匠。您输入的信息无法识别。');
        // 或者中断等待回复事务
        // res.nowait('hehe');
    //}
};

exports.image = function (message, req, res, next) {
	console.log(message);
	res.reply('image')
};

exports.voice = function (message, req, res, next) {
	console.log(message);
	res.reply('voice')
};

exports.video = function (message, req, res, next) {
	console.log(message);
	res.reply('video')
};

exports.location = function (message, req, res, next) {
	console.log(message);
	res.reply('location')
};

exports.link = function (message, req, res, next) {
	console.log(message);
	res.reply('link')
};

exports.event = function (message, req, res, next) {
	console.log(message);
	if (message.Event == 'subscribe') {
		res.reply('感谢您关注恒骏丰补胎匠！');
	} else if (message.Event == 'click') {
		res.reply('恒骏丰补胎匠');
	}
};

