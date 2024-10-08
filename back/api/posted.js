const express = require('express');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const path = require('path');
const sql = require('./supabql.js');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dg016lyae',
  api_key: '293182578381248',
  api_secret: "2crAAnYpGRNY7jGEsBC05xQGA-I"
});
  
//CLOUDINARY_URL=cloudinary://293182578381248:2crAAnYpGRNY7jGEsBC05xQGA-I@dg016lyae

const title = "posted"
{
    let count;
    async function processData() {
        try {
            const result = await sql.getData(title); // データベースからデータを非同期に取得

            if (result.error) {
                console.log("カウント失敗");
                console.error(result.error);
                count = 0; // エラーが発生した場合のカウンタの初期値
            } else {
                count = result.data.length; // データの長さをカウント
            }

        } catch (error) {
            console.error("エラー:", error);
            count = 0;
        }
        console.log(title, count);
    }
    processData()
    function id() {
        count += 1; // カウンタを1増やす
        return count; // 現在のカウンタの値を返す
    };
}
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'uploads', // 保存するフォルダ名
      format: async (req, file) => 'jpg', // jpgフォーマットに変換
      public_id: (req, file) => file.originalname, // ファイル名を使用
    },
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
    let requestType="post/search::"+title
    async function httpget(req,res){
        result=await sql.getData(title)
        if(result.error){
            console.log(requestType+"失敗")
            console.error(result.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            let body=result.data
            console.log(body)
            body.sort((a, b) => objsort(a) - objsort(b));
            if(body.length>req.body.num){
                body= body.slice(0,req.body.num);
            }
            console.log(requestType+"成功")
            console.log("kko",body)
            res.json({error:false,msg:null,body:body})
        }

    }
    router.post("/search",httpget)
}
{//情報提示
    let requestType="post::get"+title
    async function httpget(req,res){
        result=await sql.findData(title,req.body.id)
        if(result.error){
            console.log(requestType+"失敗")
            console.error(result.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            console.log(requestType+"成功")
            res.json({ success: true, data: result.data[0].photo ,error:false});
        }

    }
    router.post("/get",sql.keycheck(httpget,requestType,["id"]))
}
{//投稿
    let requestType="post::"+title
    async function httpget(req,res,who){
        
        if(!req.file){
            console.log(requestType+"ファイル失敗")
            res.json({error:true,msg:'ファイルをアップロードできませんでした'});
  
        }
        else{
            postid=id()
            body=req.body
            body.who=who
            body.photo=req.file.filename
            body.when=new Date()
            body.id=postid
            body.good=0
            console.log(body)
            result=await sql.setData(title,body)
            if(result.error){
                console.log(requestType+"投稿失敗")
                console.error(result.error)
                res.json({error:true,msg:'なんでだろうねわかんない'})
            }
            else{
                console.log(requestType+"成功")
                res.json({error:false,msg:null,body:postid})
            }
                
        }
    }
    router.post("/", upload.single('photo'),sql.keycheck(sql.whocheck(httpget,requestType),requestType,["where","description","topic","who"]))
}
{//投稿(仮)
    let requestType="post::"+title
    async function httpget(req,res){
        
        if(!req.file){
            console.log(requestType+"ファイル失敗")
            res.json({error:true,msg:'ファイルをアップロードできませんでした'});
  
        }
        else{
            postid=id()
            body=req.body
            body.photo=req.file.path
            body.when=new Date()
            body.id=postid
            body.good=0
            console.log(body)
            result=await sql.setData(title,body)
            if(result.error){
                console.log(requestType+"投稿失敗")
                console.error(result.error)
                res.json({error:true,msg:'なんでだろうねわかんない'})
            }
            else{
                console.log(requestType+"成功")
                res.json({error:false,msg:null,body:postid})
            }
                
        }
    }
    router.post("/kari", upload.single('photo'),sql.keycheck(httpget,requestType,["where","description","topic","who"]))
}
{//削除
    let requestType="delete::"+title
    async function httpdelete(req,res){
        result=delData(title,req.id)
        if(result.error){
            console.log(requestType+"失敗")
            console.error(result.error)
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
        result=await sql.upData(title,{who:req.id,updata:{description:req.body.description}})
        if(result.error){
            console.log(requestType+"プロフィール参照失敗")
            console.error(result.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            console.log(requestType+"成功")
            res.json({error:false,msg:null,body:result.body})
        }

    }
    router.put("/",sql.keycheck(httpput,requestType,["id"]))
}
{//いいね加算
    let requestType="put/good::"+title
    async function httpputgood(req,res){
        result1=await sql.findData(title,req.body.id)
        
        if(result1.error){
            console.log(requestType+"プロフィール参照失敗")
            console.error(result1.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            result2=await sql.upData(title,{who:req.body.id,updata:{good:req.body.good+result1.data[0].good}})
            if(result2.error){
                console.log(requestType+"足せなかったぜ")
                console.error(result2.error)
                res.json({error:true,msg:'なんでだろうねわかんない'})
            }
            else{
                console.log(requestType+"成功")
                se=await sql.findData(title,req.body.id)
                console.log(se.data)
                res.json({error:false,msg:null,body:result1.body})

            }
        }

    }
    router.put("/good",sql.keycheck(httpputgood,requestType,["id"]))
}
module.exports = router;