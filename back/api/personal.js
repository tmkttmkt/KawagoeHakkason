const express = require('express');
const sql = require('./supabql.js');

const router = express.Router();
const title = "personal"
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
        result1=await sql.setData(title,body)
        result2=await sql.setData("profile",{id:body.who,name:"",introduction:"",point:0})
        if(result1.error || result2.error){
            if(result1.error.code=='23505'){
                result2=await sql.delData("profile",id)
                console.log(requestType+":重複だよ")
                console.error(result1.error)
                res.json({error:true,msg:'その名前では登録できません'})

            }
            else{
                console.log(requestType+":失敗")
                console.error(result1.error)
                console.error(result2.error)
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
        result=await sql.findData(title,body)
        if(result.error){
            console.log(requestType+"失敗")
            console.error(result.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            let flg =(result.data === null)
            if(!flg){
                if(Object.keys(result.data).length==1){
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
        result=await sql.findData(title,body)
        if(result.error){
            console.log(requestType+"失敗")
            console.error(result.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            const flg =(result.data === null)
            if(!flg){
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
        result=await sql.findData(title,body)
        if(result.error){
            console.log(requestType+"参照失敗")
            console.error(result.error)
            res.json({error:true,msg:'なんでだろうねわかんない'})
        }
        else{
            const flg =(result.data === null)
            if(!flg){
                if(Object.keys(obj).length==1){
                    result=await sql.upData(title,{who:req.body.user,updata:{nextpass:req.body["nextpass"]}})
                    if(result.error){
                        console.log(requestType+"編集失敗")
                        console.error(result.error)
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


