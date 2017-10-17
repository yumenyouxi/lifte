const Q = require('q');

const common = require(__basename + '/lib/common/common.js');

const mysql = require('mysql');

const connection = mysql.createConnection(config.mysqlOptions);

connection.connect();

exports.query = function (sql, sqlStatus) {
	return Q.ninvoke(connection, 'query', sql)
		.then((result) => {
			if (sqlStatus === 1) {
				return common.register.success;
			} else if (sqlStatus === 2) {
				if (Array.isArray(result)) {
					return result[0];
				} else {
					return result;
				}
			}
		})
		.catch((err) => {
			return err;
		})
}