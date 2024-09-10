

  //情報確認のための変数
let successMsg: string = "";
let errorMsg: string = "";
//let url="http://localhost:5000"
let url="https://kawagoe-hakkason-mjg1.vercel.app"

// 投稿を作成する関数
export async function createPost(pho:{photo:File,description:string,who:string,topic:string}) {
  try {
    const formData = new FormData();
    formData.append("photo", pho.photo);
    formData.append("where", "川越市");
    formData.append("description", pho.description);
    formData.append("topic", pho.topic);
    formData.append("who", pho.who);
    console.log(url+"/posted/kari")
    const res = await fetch(url+"/posted/kari", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.error) {
      errorMsg = data.msg;
      console.log(errorMsg)
      return false
    } else {
      successMsg = `Post created with ID: ${data.body}`;
      return true
    }
  } catch (error) {
    errorMsg = "Failed to create post.";
    return false
  }
}
let photostring
// サーバーから写真取得
let photos: Array<{ id:number; description: string; likes: number ;photostring:string;topic:string,where:string;good:number;who:string,flg:boolean,showflg:boolean}> = [];
let error: string | null = null;


// サーバーから写真取得する関数
export async function fetchPhotos(id:number) {
  try {
    const response = await fetch(url+'/posted/get',{// ここをサーバーのAPIエンドポイントに置き換える
    method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id:id }), // photoのURLやIDを送信
    });
    if (response.ok) {      
      const data = await response.json();  
      if (data.error) {
            errorMsg = data.msg;
        } else {
            return data.data
          }
    } else {
      error = "Failed to load photos";
    }
  } catch (err) {
    error = err.message;
  }
}
// サーバーから投稿取得する関数
export async function searchPhotos() {
  photos=[]
  try {
    const response = await fetch(url+'/posted/search',{// ここをサーバーのAPIエンドポイントに置き換える
    method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ q:"",num:3 }), // photoのURLやIDを送信
    });
    if (response.ok) {
      let data = await response.json();
      let ids=data.body
      for (const post of ids) {
        let base64Imagest=await fetchPhotos(post.id)
        photos = [...photos,{id:post.id, description: post.description, likes: post.good,photostring:base64Imagest,topic:post.topic,where:post.where,good:post.good,who:post.who,flg:true,showflg:true}]
      };
    } else {
      error = "Failed to load photos";
    }
  } catch (err) {
    error = err.message;
  }
  return photos
}


// いいねボタンが押されたときの処理
export async function likePhoto(photo:{ id:number; description: string; likes: number ;photostring:string;topic:string,where:string;good:number;who:string,flg:boolean,showflg:boolean},n:number) {
  try {

    // サーバーにいいね数を送信
    const response = await fetch(url+'/posted/good/', {  // ここをサーバーのAPIエンドポイントに置き換える
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id:photo.id ,good:n}), // photoのURLやIDを送信
    });

    if (!response.ok) {
      errorMsg='Failed to update like count'
      throw new Error('Failed to update like count');
    }
    const data = await response.json();  
    if (data.error) {
          errorMsg = data.msg;
    }
    else{
      successMsg="いったが？？？"
    }
  } catch (err) {
    console.error(err);
  }
}


function printph(){
  
  console.log(photos);
  console.log(photos.length);
}