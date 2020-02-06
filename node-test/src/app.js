
var express = require('express');
const mysql = require('mysql');
var app = express();

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
let connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: '123456',
  database: 'test',
  port: 3306
});

connection.connect(function (err) {
  if (err) {
    console.error('连接失败: ' + err.stack);
    return;
  }

  console.log('连接成功 id ' + connection.threadId);
});

// 查询数据库
function getUsers() {
  return new Promise((resolve, reject) => {

    connection.query('SELECT * FROM user', (err, results) => {
      if (err) {
        return reject(new Error("An error occured getting the users: " + err));
      }

      resolve((results || []).map((user) => {
        return {
          id: user.id,
          name: user.username
        };
      }));
    });

  });
}

//写个接口getUser
app.get('/api/getUser', async function (req, res) {
  let a = await getUsers();
  res.status(200);
  res.json(a)
});

app.listen(3307, () => console.log('Example app listening on port 3307!'))