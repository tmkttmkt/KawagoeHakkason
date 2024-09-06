const express = require('express');
const multer = require('multer');
const path = require('path');
const sql = require('./supabql.js');

const title = "posted"
{
    let count = 0; // カウンタの初期値
  
    async function id() {
      count += 1; // カウンタを1増やす
      return count; // 現在のカウンタの値を返す
    };
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  
const upload = multer({ storage: storage });

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
    function objsort(ob){
        num=100
        num+=ob.good
        num+=Math.random()*100
        return num
    }
    let requestType="get/search::"+title
    async function httpget(req,res){
        sel=await sql.getData(title,req.body.id)
        if(sel.error){
            console.log(requestType+"失敗")
            console.error(sel.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            let body=sel.body
            body.sort((a, b) => objsort(a) - objsort(b));
            if(body.length>req.body.num){
                body= body.slice(0,req.body.num);
            }
            console.log(requestType+"成功")
            res.json({error:false,msg:null,body:sel.body})
        }

    }
    router.get("/",sql.keycheck(httpget,requestType,["q"]))
}
{//情報提示
    let requestType="get::"+title
    async function httpget(req,res){
        sel=await sql.findData(title,req.body.id)
        if(sel.error){
            console.log(requestType+"失敗")
            console.error(sel.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            console.log(requestType+"成功")
            res.json({error:false,msg:null,body:sel.body})
        }

    }
    router.get("/",sql.keycheck(httpget,requestType,["id"]))
}
{//投稿
    let requestType="post::"+title
    async function httpget(req,res,who){
        
        if(!req.file){
            res.json({error:true,msg:'ファイルをアップロードできませんでした'});
  
        }
        else{
            postid=id()
            body=req.body
            body.who=who
            body.photo=req.file.filename
            body.where=new Date()
            body.id=postid
            sql.setData(title,body)
            if(selt.error){
                console.log(requestType+"プロフィール参照失敗")
                console.error(selt.error)
                res.json({error:true,msg:'なんでだろうねわかんない'})
            }
            else{
                console.log(requestType+"成功")
                res.json({error:false,msg:null,body:postid})
            }
                
        }
    }
    router.post("/", upload.single('photo'),sql.keycheck(sql.whocheck(httpget,requestType),requestType,["photo","where","description","topic","who"]))
}
{//削除
    let requestType="delete::"+title
    async function httpdelete(req,res){
        sel=delData(title,req.id)
        if(sel.error){
            console.log(requestType+"失敗")
            console.error(sel.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            console.log(requestType+"成功")
            res.json({error:false,msg:null})
        }
    }
    router.delete("/",sql.keycheck(httpdelete,requestType,["id"]))
}
{//編集
    let requestType="put::"+title
    async function httpput(req,res){
        selt=await sql.upDataData(personal,{who:req.id,updata:{description:req.body.description}})
        if(selt.error){
            console.log(requestType+"プロフィール参照失敗")
            console.error(selt.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            console.log(requestType+"成功")
            res.json({error:false,msg:null,body:selt.body})
        }

    }
    router.put("/",sql.keycheck(httpput,requestType,["id"]))
}
{//いいね加算
    let requestType="put/good::"+title
    async function httpputgood(req,res){
        selt=await sql.upDataData(personal,{who:req.id,updata:{point:req.body.point}})
        if(selt.error){
            console.log(requestType+"プロフィール参照失敗")
            console.error(selt.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            console.log(requestType+"成功")
            res.json({error:false,msg:null,body:selt.body})
        }

    }
    router.put("/",sql.keycheck(httpputgood,requestType,["id"]))
}
module.exports = router;