const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login'); // 引入 login 路由
const contentRoute = require('./routes/content'); // 引入 content 路由

const app = express();
const PORT = 3001;

// 中间件
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 路由
app.use('/api/auth/register', registerRoute); // 注册路由
app.use('/api/auth/login', loginRoute); // 登录路由
app.use('/api', contentRoute); // 内容相关路由

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});