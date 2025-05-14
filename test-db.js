const pool = require('./db');

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ 成功连接到数据库');
    connection.release(); // 释放连接
  } catch (err) {
    console.error('❌ 数据库连接失败:', err.message);
  }
})();