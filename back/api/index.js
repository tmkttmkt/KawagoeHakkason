//import
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser'); 
//本体
const app = express();
const PORT =5000;

//ハードより。いろいろアクセスできるようにする
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));
//app.use(bodyParser.json({ limit: '50mb' }));  // JSONボディのサイズ制限
//app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));  // URLエンコードされたデータのサイズ制限

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
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use((req, res,next) => {
  res.status(404).json({error:true,msg:'ドドドォ404ドン!!そんなページはない!!\n多分'});
});
//実行
app.listen(PORT, () => console.log(`Server running at http://0.0.0.0:${PORT}/`));
