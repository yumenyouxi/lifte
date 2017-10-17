const config = {
	host: '127.0.0.1',
	serverHost: 'http://www.kethen.com',
	port: '9012'
}

exports.config = config;

exports.mysqlOptions = {
	host: config.host,
	user: 'root',
	password: '',
	database: 'chenapp'
}