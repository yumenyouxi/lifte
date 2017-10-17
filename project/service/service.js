const mysql = require(__basename + '/lib/mysql/mysql.js');

class Service {

	query(sql,sqlStatus) {
		return mysql.query(sql,sqlStatus);
	}

}


module.exports = new Service();