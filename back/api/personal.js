const express = require('express');
const multer = require('multer');
const path = require('path');
const sql = require('./supabql.js');

const router = express.Router();
const personal = "personal"

router.post('/registration', (req, res) => {
    sel=sql.setData(personal,req.body)
    if(sel.error){
        console.log("post/registration:失敗")
        console.error(sel.error)
    }
    else{
        console.log("post/registration:成功")
        console.log(sel.data)
    }
});
router.post('/', (req, res) => {
    sel=sql.findData(personal,req.body)
    if(sel.error){
        console.error("post:失敗")
        console.log(sel.error)
    }
    else{
        const flg =sel.data === null
        if(flg){
            if(Object.keys(obj).length==1){
                res.json({result:flg})
                console.log("post:ログインします")
            }
            else{
                console.log("post:主キーがおかしい")
                res.json({result:null})
                console.log(sel.data)
            }
        }
        else{
            console.log("post:見つからなかった")
            res.json({result:flg})
        }
    }
});
router.delete('/', (req, res) => {
    sel=sql.delData(personal,req.body)
    if(sel.error){
        console.error("delete:失敗")
        console.log(sel.error)
    }
    else{
        console.log("delete:成功")
    }
});
router.get('/', (req, res) => {
    sel=sql.getData(personal,req.body)
    if(sel.error){
        console.error("get:失敗")
        console.log(sel.error)
    }
    else{
        console.log("get:成功")
    }
});
router.put('/', (req, res) => {
    sql.upData(personal,req.body)
    if(sel.error){
        console.error("put:失敗")
        console.log(sel.error)
    }
    else{
        console.log("put:成功")
    }
});

module.exports = router;



