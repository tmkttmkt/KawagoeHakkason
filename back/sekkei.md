# API
## 投稿
/posted
### 情報提示
get:/
body=Null
res={errer:bool,msg:text}
### 投稿
post:/
body={id:int,photo:??,where:txt,description:txt,topic:txt}
res={errer:bool,msg:text}
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
body=Null
res={errer:bool,msg:text}
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
body={user:txt,pass:txt}
### 削除
detele:/
body={user:txt}
res={errer:bool,msg:text}

# テーブル
## 個人の情報
in::ユーザー名(id),パスワード
out::ユーザー名(id),パスワード
## 投稿
in::id,写真,位置,説明,お題,いいね
out::id,写真パス,位置,説明,お題,いいね,プロフィール.id
## プロフィール
in::id,名前,自己紹介,ポイント
out::id,名前,自己紹介,ポイント,個人の情報.id
