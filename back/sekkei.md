# API
見方
リクエストの種類:リクエストの場所
## 投稿
/posted
### 検索
get:/search
body={q:txt:who:txt,time:date}
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
## プロフィール
/profile
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
## 個人の情報
/personal
### ログイン
post:/registration
body={user:txt,pass:txt}
res={errer:bool,msg:text}
### 登録
post:/
body={user:txt,pass:txt}
res={errer:bool,msg:text}
### 編集
put:/
body={user:txt,pass:txt:nextpass}
### 削除
detele:/
body={user:txt}
res={errer:bool,msg:text}

# テーブル
## 個人の情報
in::ユーザー名(id),パスワード
out::ユーザー名(id),パスワード,プロフィール.id
## 投稿
in::id,写真,位置,説明,お題,いいね,プロフィール
out::id,写真パス,位置,説明,お題,いいね,いつ,プロフィール.id
## プロフィール
in::id,名前,自己紹介,ポイント
out::id,名前,自己紹介,ポイント
