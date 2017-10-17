const service = require(__basename + '/service/service.js');
const commonSql = require(__basename + '/lib/common/sql.js');
const crypto = require('crypto');
const urlLib = require('url');
const common=require(__basename+'/lib/common/common.js');
const SMSClient = require('@alicloud/sms-sdk')
// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = 'LTAI6RXmvMnlRl9q';
const secretAccessKey = 'mr5gd2CuLgUHUJI9GlsGDq5sWCy1oQ';
//初始化sms_client
const smsClient = new SMSClient({accessKeyId, secretAccessKey})
class RoutesController {

	rootController(req, res) {
		res.render('index');
	}
	registerController(req, res) {
		if (req.body) {

			var selectSql = commonSql.selectUserSql(req.body);
			service.query(selectSql, 2)
				.then((result) => {

					if (result && Array.isArray(result) && result.length === 0) {
						//加密密码
						var md5 = crypto.createHash('md5');
						md5.update(req.body.newPwd);
						req.body.newPwd = md5.digest('hex');

						var sql = commonSql.insertUserSql(req.body);
						service.query(sql, 1)
							.then((data) => {
								res.send(data);
							})
					} else {
						res.json(common.register.fail);
					}
				})
		}	
	}
	loginController(req,res){
		var md5 = crypto.createHash('md5');
		md5.update(req.body.pwd);
		req.body.pwd = md5.digest('hex');
		var selectSql = commonSql.selectUserSqlForLogin(req.body);
		service.query(selectSql,2)
			.then((result)=>{
				if(result&&Array.isArray(result)&&result.length===1){
					res.send(common.login.success);
				}else{
					res.json(common.login.fail);
				}
			})
	}
	forgetuserController(req,res){
		if (req.query) {
			var selectSql = commonSql.selectUserSql(req.query);
			service.query(selectSql, 2)
				.then((result) => {
					console.log("req.query==",req.query)
					console.log("result==>,",result);
					if (result && Array.isArray(result) && result.length === 1) {
						var timestamp = new Date().getTime().toString().substr(-6, 6);
						smsClient.sendSMS({
						    PhoneNumbers: req.query.userPhone,
						    SignName: '生活演绎APP',
						    TemplateCode: 'SMS_101125086',
						    TemplateParam: '{"code":"'+timestamp+'"}'
						}).then(function (res) {
						    let {Code}=res
						    if (Code === 'OK') {
						       	console.log(res);
						    }
						}, function (err) {
						    console.log(err)
						})
						res.send({status: 300, message: '验证码发送成功,请查收', validCode: timestamp});
					}else{
						res.json(common.forgetuser.fail);
					}	
				})
		}
	}
	forgetpwdController(req, res) {

		if (req.body) {
			var md5 = crypto.createHash('md5');
			md5.update(req.body.pwd);
			req.body.pwd = md5.digest('hex');
			var updateSql = commonSql.updatePwdInfo(req.body);
			service.query(updateSql, 3)
				.then((result) => {
					res.json({status: 1, message: '密码修改成功'});
				})
		}
	}
	shoppingController(req, res) {
		var act = urlLib.parse(req.url, true).query.act;
		if(act==="select"){
			var selectSql = commonSql.selectShopping(0, 6);
			service.query(selectSql, 2)
				.then((data) => {
					res.send(data);
				})
		}else if(act ==='delete'){
		var desql = commonSql.deleteShopping(req.query);
		
		service.query(desql, 3)
			.then((result) => {
				
				if (result && Array.isArray(result) && result.length >= 1) {
					res.send(result);
				} else {
					res.send(null);
				}
			})

		}
			
	}

}

module.exports = new RoutesController();