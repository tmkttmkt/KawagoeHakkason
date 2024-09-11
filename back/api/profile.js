const express = require('express');
const sql = require('./supabql.js');

const title = "profile"
const router = express.Router();
/*
### ページ編集
put:/page
body={user:txt,description:txt}
res={errer:bool,msg:text}
### 情報提示
get:/
body={user:txt}
res={errer:bool,msg:text,body:obj}
### ポイント加減算
put:/point
body={point:int}
res={errer:bool,msg:text}
*/

{//ページ編集
    let requestType="put/page::"+title
    async function httpputpage(req,res,who){
        result=await sql.upData(personal,{who:who,updata:{description:req.body.description}})
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
    router.put('/page',sql.keycheck(sql.whocheck(httpputpage,requestType),requestType,["user","description"]));
}
{//ポイント加減算
    let requestType="put/point::"+title
    async function httpputpoint(req,res,who){
        result=await sql.upData(personal,{who:who,updata:{point:req.body.point}})
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
    router.put('/point',sql.keycheck(sql.whocheck(httpputpoint,requestType),requestType,["user","point"]));
}
{//情報提示
    let requestType="post::get"+title
    async function httpget(req,res,who){
        result=await sql.findData(personal,who)
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
    router.get('/post',sql.keycheck(sql.whocheck(httpget,requestType),requestType,["user"]));
}

module.exports = router;