const express = require('express');
const multer = require('multer');
const path = require('path');
const sql = require('./supabql.js');
const fs = require('fs');

const title = "posted"
{
    let count;
    async function processData() {
        try {
            const body = await sql.getData(title); // データベースからデータを非同期に取得

            if (body.error) {
                console.log("カウント失敗");
                console.error(body.error);
                count = 0; // エラーが発生した場合のカウンタの初期値
            } else {
                count = body.data.length; // データの長さをカウント
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
    let requestType="post/search::"+title
    async function httpget(req,res){
        sel=await sql.getData(title)
        if(sel.error){
            console.log(requestType+"失敗")
            console.error(sel.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            let body=sel.data
            console.log(body)
            body.sort((a, b) => objsort(a) - objsort(b));
            if(body.length>req.body.num){
                body= body.slice(0,req.body.num);
            }
            console.log(requestType+"成功")
            console.log(body)
            res.json({error:false,msg:null,body:body})
        }

    }
    router.post("/search",httpget)
}
{//情報提示
    let requestType="post::get"+title
    async function httpget(req,res){
        sel=await sql.findData(title,req.body.id)
        if(sel.error){
            console.log(requestType+"失敗")
            console.error(sel.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            console.log(requestType+"成功")
            const filePath = path.join(__dirname,  '..','uploads', sel.data[0].photo);
            console.log(filePath)
            fs.readFile(filePath,(err, fileBuffer) => {
                if (err) {
                    console.error("ファイル読み込みエラー:", err);
                    res.status(500).json({ error: "ファイルの読み込みに失敗しました" });
                    return;
                }
        
                const fileBase64 = fileBuffer.toString('base64');
                res.json({ success: true, data: fileBase64 ,error:false});
            });
        }

    }
    router.post("/get",sql.keycheck(httpget,requestType,["id"]))
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
            body.when=new Date()
            body.id=postid
            body.good=0
            console.log(body)
            selt=await sql.setData(title,body)
            if(selt.error){
                console.log(requestType+"投稿失敗")
                console.error(selt.error)
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
        selt=await sql.upData(title,{who:req.id,updata:{description:req.body.description}})
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
        selt=await sql.findData(title,req.body.id)
        
        if(selt.error){
            console.log(requestType+"プロフィール参照失敗")
            console.error(selt.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            seltt=await sql.upData(title,{who:req.body.id,updata:{good:req.body.good+selt.data[0].good}})
            if(seltt.error){
                console.log(requestType+"足せなかったぜ")
                console.error(seltt.error)
                res.json({error:true,msg:'なんでだろうねわかんない'})
            }
            else{
                console.log(requestType+"成功")
                se=await sql.findData(title,req.body.id)
                console.log(se.data)
                res.json({error:false,msg:null,body:selt.body})

            }
        }

    }
    router.put("/good",sql.keycheck(httpputgood,requestType,["id"]))
}
module.exports = router;