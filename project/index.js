global.__basename = __dirname;

global.config = require(__basename + '/config/development.js');

const routes = require(__basename + '/routes/routes.js');

const express = require('express');

const app = express();

const ejs = require('ejs');

const favicon = require('serve-favicon');
//post请求用的
const bodyParser = require('body-parser');

var port = process.env.PORT || config.config.port;

app.use(favicon(__dirname + '/assets/images/one@2x.png'));

//设置静态资源目录
app.use(express.static(__basename + '/assets'));

app.use(express.static(__basename + '/views'));

//设置视图引擎
app.set('views', __basename + '/views');
app.set('view engine', 'html');
app.engine('.html', ejs.__express);

//json化请求体数据
app.use(bodyParser.json());

//加载所有路由
routes(app);

app.use((req, res) => {
	res.status(404);
	res.send('找不到页面');
});

app.use((err, req, res) => {
	res.status(500);
	res.send('服务器报错');
})

app.listen(port, () => {
	console.log(`the server running at ${config.config.host}:${port}`);
});