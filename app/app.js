const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;
const data = []; // データを格納する配列

// 変数conに、createConnectionを使って接続するデータベースの情報を格納します。
// process.env.~~~ ←.env 環境変数参照
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST, // ホスト名をmysqlと指定
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

// MySQL接続の確立
connection.connect((err) => {
  if (err) {
    console.error('MySQL接続エラー:', err);
  } else {
    console.log('MySQL接続成功');
  }
});

app.get('/', (req, res) => {
  // MySQLクエリの実行
  connection.query('SELECT * FROM mytable', (err, results) => {
    if (err) {
      console.error('MySQLクエリエラー:', err);
      res.status(500).send('Internal Server Error');
    } else {
      // クエリ結果を表示
      console.log(results);
      // // 取得したデータを配列に格納
      // data.push(...results);

      // // 環境変数にデータを設定
      // process.env.IDS = data.map((row) => row.id).join(',');
      // process.env.TEXTS = data.map((row) => row.text).join(',');
      // process.env.LATITUDES = data.map((row) => row.latitude).join(',');
      // process.env.LONGITUDES = data.map((row) => row.longitude).join(',');
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
