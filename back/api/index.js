//import
const express = require('express');
const cors = require('cors');

//本体
const app = express();
const PORT =5000;

//ハードより。いろいろアクセスできるようにする
app.use(cors());
app.use(express.static('uploads'));
//APIインポート
const personalAPI = require('./personal.js');
const postedAPI = require('./posted.js');
const profileAPI = require('./profile.js');
app.use("/personal",personalAPI);
app.use("/posted",postedAPI);
app.use("/profile",profileAPI);



//http//の画面
app.get('/', (req, res) => {
  console.log("helloword");
  res.json({t:"helloword"})
  });

app.use((req, res,next) => {
  res.status(404).send('ドドドォ404ドン!!そんなページはない!!\n多分');
});
//実行
app.listen(PORT, () => console.log(`Server running at http://0.0.0.0:${PORT}/`));
