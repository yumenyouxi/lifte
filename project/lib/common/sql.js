class SQL {

    //注册
	insertUserSql(o) {
		var sql = "INSERT INTO `register`(`phone`, `pwd`) VALUES('" + o.userPhone + "','" + o.newPwd +"')";
		return sql;
	}
	selectUserSql(o) {
		var sql = "SELECT `phone` FROM `register` WHERE `phone`='"  + o.userPhone + "'";
		return sql;
	}
	//登录
	selectUserSqlForLogin(o){
		var sql = "SELECT `phone` FROM `register` WHERE `phone`='"  + o.phone + "' AND `pwd`='"+ o.pwd +"'";
		return sql;
	}
	//修改密码
	updatePwdInfo(o) {
		var sql = "UPDATE `register` SET `pwd`='" + o.pwd + "' WHERE `phone`='" + o.phone + "'";
		return sql;
	}
	//查询购物车
	selectShopping(start, end) {
		var sql = "SELECT * FROM `shopping` LIMIT " + start +"," + end;
		return sql;
	}
	//删除购物车
	deleteShopping(o) {
		var sql = "DELETE FROM `shopping` WHERE id='" + o.id + "'";
		return sql;
	}
}

module.exports = new SQL();