const express = require('express');
const multer = require('multer');
const path = require('path');


const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'mypassword',
    database: 'mydatabase'
  });
//SQL接続
connection.connect((err) => {
if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
}
console.log('Connected as id ' + connection.threadId);
});

const router = express.Router();

router.post('/registration', (req, res) => {
    console.log("登録します")
});
router.post('/', (req, res) => {
    console.log("ログインします")
});
router.delete('/', (req, res) => {
    console.log("消します")
});
router.get('/', (req, res) => {
    console.log("情報あげます")
});
router.put('/', (req, res) => {
    console.log("編集します")
});

module.exports = router;







