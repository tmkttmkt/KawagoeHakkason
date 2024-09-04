const express = require('express');
const multer = require('multer');
const path = require('path');
const sql = require('./supabql.js');

const title = "posted"
{
    let count = 0; // カウンタの初期値
  
    function id() {
      count += 1; // カウンタを1増やす
      return count; // 現在のカウンタの値を返す
    };
}
function photohoz(){

}
const router = express.Router();
/*
### 検索
get:/search
body={q:txt}
res={errer:bool,msg:text,body:obj}
### 情報提示
get:/
body={id:txt}
res={errer:bool,msg:text,body:obj}
### 投稿
post:/
body={photo:??,where:txt,description:txt,topic:txt,who:txt}
res={errer:bool,msg:text,body:int}
### 削除
delete:/
body={id:int}
res={errer:bool,msg:text}
### 編集
put:/
body={id:int,introduction:txt}
res={errer:bool,msg:text}
### いいね加算
put:/good
body={id:int,good:int}
res={errer:bool,msg:text}
*/

{//検索
    let requestType="get/search::"+title
    function httpget(req,res){

    }
    router.get("/",sql.keycheck(httpget,requestType,["q"]))
}
{//情報提示
    let requestType="get::"+title
    function httpget(req,res){
        sel=sql.findData(title,req.body.id)
        if(sel.error){
            console.log("${requestType}:失敗")
            console.error(sel.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            console.log("${requestType}:成功")
            res.json({error:false,msg:null,body:sel.body})
        }

    }
    router.get("/",sql.keycheck(httpget,requestType,["id"]))
}
{//投稿
    let requestType="post::"+title
    function httpget(req,res,who){
        photopath=photohoz(req.photo)
        postid=id()
        selt=sql.findData(personal,who)
        if(selt.error){
            console.log("${requestType}:プロフィール参照失敗")
            console.error(selt.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            console.log("${requestType}:成功")
            body=req.body
            body.who=who
            body.photo=photopath
            body.id=postid
            sql.setData(title,body)
            res.json({error:false,msg:null,body:postid})
        }
    }
    router.post("/",sql.keycheck(sql.whocheck(httpget,requestType),requestType,["photo","where","description","topic","who"]))
}
{//削除
    let requestType="delete::"+title
    function httpdelete(req,res){
        sel=delData(title,req.id)
        if(sel.error){
            console.log("${requestType}:失敗")
            console.error(sel.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            console.log("${requestType}:成功")
            res.json({error:false,msg:null})
        }
    }
    router.delete("/",sql.keycheck(httpdelete,requestType,["id"]))
}
{//編集
    let requestType="put::"+title
    function httpput(req,res){

    }
    router.put("/",sql.keycheck(httpput,requestType,["id"]))
}
{//いいね加算
    let requestType="put/good::"+title
    function httpputgood(req,res){

    }
    router.put("/",sql.keycheck(httpputgood,requestType,["id"]))
}
module.exports = router;