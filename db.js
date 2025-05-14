const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: 'localhost', // 数据库主机
  user: 'root', // 数据库用户名
  password: '12345678', // 数据库密码
  database: 'tour_diary', // 数据库名称
});

module.exports = pool;