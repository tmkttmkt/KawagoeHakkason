const express = require('express');
const sql = require('./supabql.js');

const router = express.Router();
const title = "personal"
{
    let count = 0; // カウンタの初期値
  
    function id() {
      count += 1; // カウンタを1増やす
      return count; // 現在のカウンタの値を返す
    };
}


/*
### 登録
post:/registration
body={user:txt,pass:txt}
res={error:bool,msg:text}
### ログイン
post:/
body={user:txt,pass:txt}
res={error:bool,msg:text}
### 編集
put:/
body={user:txt,pass:txt,nextpass:txt}
### 削除
detele:/
body={user:txt,pass:txt}
res={error:bool,msg:text}
*/
function deluuser(obj){
    const { user, ...newObj } = obj;
    newObj.id=user
    return newObj
}

{//登録
    let requestType="post/registration::"+title
    async function httppostregistration(req, res){
        let body=deluuser(req.body)
        
        body.who=id()
        sel=await sql.setData(title,body)
        sel2=await sql.setData("profile",{id:body.who,name:"",introduction:"",point:0})
        if(sel.error || sel2.error){
            if(sel.error.code=='23505'){
                sel2=await sql.delData("profile",id)
                console.log(requestType+":重複だよ")
                console.error(sel.error)
                res.json({error:true,msg:'その名前では登録できません'})

            }
            else{
                console.log(requestType+":失敗")
                console.error(sel.error)
                console.error(sel2.error)
                res.json({error:true,msg:'なんでだろうねわかんない'})

            }
        }
        else{
            console.log(requestType+"成功")
            res.json({error:false,msg:null})
        }
    }
    router.post('/registration',sql.keycheck(httppostregistration,requestType,["user","pass"]));
}
{//ログイン
    let requestType="post::"+title
    async function httppost(req, res){
        let body=deluuser(req.body)
        sel=await sql.findData(title,body)
        if(sel.error){
            console.log(requestType+"失敗")
            console.error(sel.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            let flg =(sel.data === null)
            if(flg){
                if(Object.keys(sel.data).length==1){
                    res.json({result:flg,msg:null})
                    console.log(requestType+"ログインします")
                }
                else{
                    console.log(requestType+"主キーがおかしいや")
                    res.json({error:false,msg:"主キーがおかしいや"})
                }
            }
            else{
                console.log(requestType+"主キーが見つからなかった")
                res.json({result:flg,msg:"主キーが見つからなかった"})
            }
        }
    }
    router.post('/', sql.keycheck(httppost,requestType,["user","pass"]));
}
{//削除
    let requestType="delete::"+title
    async function httpdelete(req, res){
        let body=deluuser(req.body)
        sel=await sql.findData(title,body)
        if(sel.error){
            console.log(requestType+"失敗")
            console.error(sel.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            const flg =(sel.data === null)
            if(flg){
                if(Object.keys(obj).length==1){
                    res.json({result:flg,msg:null})
                    console.log(requestType+"削除します")
                }
                else{
                    console.log(requestType+"主キーがおかしいや")
                    res.json({error:false,msg:"主キーがおかしいや"})
                }
            }
            else{
                console.log(requestType+"主キーが見つからなかった")
                res.json({result:flg,msg:"主キーが見つからなかった"})
            }
        }
    }
    router.delete('/', sql.keycheck(httpdelete,requestType,["user","pass"]));
}
{//編集
    let requestType="put::"+title
    async function httpput(req,res){
        let body=deluuser(req.body)
        sel=await sql.findData(title,body)
        if(sel.error){
            console.log(requestType+"参照失敗")
            console.error(sel.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            const flg =(sel.data === null)
            if(flg){
                if(Object.keys(obj).length==1){
                    sel=await sql.upData(title,{who:req.body.user,updata:{nextpass:req.body["nextpass"]}})
                    if(sel.error){
                        console.log(requestType+"編集失敗")
                        console.error(sel.error)
                        res.json({error:true,msg:'なんでだろうねわかんない'})
                    }
                    else{
                        res.json({result:flg,msg:null})
                        console.log(requestType+"編集します") 
                    }
                }
                else{
                    console.log(requestType+"主キーがおかしいや")
                    res.json({error:false,msg:"主キーがおかしいや"})
                }
            }
            else{
                console.log(requestType+"主キーが見つからなかった")
                res.json({result:flg,msg:"主キーが見つからなかった"})
            }
        }
    }
    router.put('/', sql.keycheck(httpput,requestType,["user","pass","nextpass"]) );
}

module.exports = router;


