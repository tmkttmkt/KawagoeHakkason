const { createClient } = require('@supabase/supabase-js');
const pass="Kawagoe20240902"
const supabaseUrl = "https://hidorljikpynyolgrmou.supabase.co";
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpZG9ybGppa3B5bnlvbGdybW91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyNjU2NTgsImV4cCI6MjA0MDg0MTY1OH0.aY1fXJe5xFb2x3KC68SwObCVY4iyeJPnOlh8O11kgT0";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

//データを取得
async function getData(table) {
    

    const sel = await supabase.from(table).select("*");
  return sel
}

//データを参照
async function findData(table,num) {
    

  const sel = await supabase.from(table).select("*").eq("id",num);
          
return sel
}
//データを検索
async function findData(table,num) {
    

  const sel = await supabase.from(table).select("*");
          
return sel
}
async function delData(table,num) {
    


  const  sel = await supabase.from(table).delete().eq('id',num)
return sel
}

//データを挿入
async function setData(table,date) {          
  const sel = await supabase.from(table).select("*").insert([date])
return sel
}

async function upData(table,date) {     
  const sel = await supabase.from(table).update(date.updata).eq('id',date.who).select()
  return sel
            
}
function keycheck(fn,type,filterKeys) {
  return function(req, res) {
      if(filterKeys.every(key => obj.hasOwnProperty(key))){
          return fn(req, res);
      }
      else{
          console.error('${type}:必要な引数が足りません')
          res.json({error:true,msg:'必要な引数が足りません'})
          
      }
  };
}
function whocheck(fn,type) {
  return function(req, res) {
      let who=sql.findData(title,req.body.user)
      if(who==null){
          console.error('${type}:そんなユーザーはいない')
          res.json({error:true,msg:'そんなユーザーはいない'})
      }
      else{
          return fn(req, res,who);
          
      }
  };
}
module.exports = {
    getData,
    setData,
    findData,
    delData,
    upData,
    keycheck,
    whocheck,
}

/*
pass:Kawagoe20240902
API:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpZG9ybGppa3B5bnlvbGdybW91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyNjU2NTgsImV4cCI6MjA0MDg0MTY1OH0.aY1fXJe5xFb2x3KC68SwObCVY4iyeJPnOlh8O11kgT0
url:https://hidorljikpynyolgrmou.supabase.co/
*/