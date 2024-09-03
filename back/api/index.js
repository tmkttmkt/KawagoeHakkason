//import
const express = require('express');
const cors = require('cors');

//本体
const app = express();
const PORT = process.env.PORT || 5000;

//ハードより。いろいろアクセスできるようにする
app.use(cors());
app.use(express.static('uploads'));
//APIインポート
const personalAPI = require('./personal.js');
const photoAPI = require('./photo.js');
//const postedAPI = require('./posted.js');
const profileAPI = require('./profile.js');
app.use("/personal",personalAPI);
app.use("/photo",photoAPI);
//app.use("/posted",postedAPI);
app.use("/profile",profileAPI);



//http//の画面
app.get('/', (req, res) => {
  console.log("helloword");
  res.json({t:"helloword"})
  });

//実行
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
