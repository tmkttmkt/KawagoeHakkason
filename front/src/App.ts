

  //情報確認のための変数
let successMsg: string = "";
let errorMsg: string = "";

// 投稿するための変数
let photo: File | null = null;
let where: string = "";
let description: string = "";
let topic: string = "";
let who: string = "John Doe";

// 投稿を作成する関数
export async function createPost() {
  try {
    const formData = new FormData();
    if (photo) formData.append("photo", photo);
    formData.append("where", where);
    formData.append("description", description);
    formData.append("topic", topic);
    formData.append("who", who);

    const res = await fetch("http://localhost:5000/posted", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.error) {
      errorMsg = data.msg;
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
let photos: Array<{ id:number; description: string; likes: number ;photostring:string}> = [];
let error: string | null = null;


// サーバーから写真取得する関数
export async function fetchPhotos(id:number) {
  try {
    const response = await fetch('http://localhost:5000/posted/get',{// ここをサーバーのAPIエンドポイントに置き換える
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
            const base64Image = data.data;
            photostring = `data:image/jpeg;base64,${base64Image}`; // Base64データを表示可能な形式に変換
            return `data:image/jpeg;base64,${base64Image}`
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
    const response = await fetch('http://localhost:5000/posted/search',{// ここをサーバーのAPIエンドポイントに置き換える
    method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ q:"",num:3 }), // photoのURLやIDを送信
    });
    if (response.ok) {
      let data = await response.json();
      let ids=data.body
      ids.forEach(async function(post) {
        let base64Imagest=await fetchPhotos(post.id)
        photos = [...photos,{id:post.id, description: post.description, likes: post.good,photostring:base64Imagest}]

      });
    } else {
      error = "Failed to load photos";
    }
  } catch (err) {
    error = err.message;
  }
  return photos
}


// いいねボタンが押されたときの処理
export async function likePhoto(photo: { id:number; description: string; likes: number ,photostring:string}) {
  const likedPhotos = JSON.parse(localStorage.getItem('likedPhotos') || '[]');
    // すでにいいねを押していた場合は何もしない
  if (likedPhotos.includes(photo.id)) {
      successMsg="いっってないが？？？"
    alert("You have already liked this post.");
    return;
  }

  try {
    photo.likes += 1; // 画面上で即座に反映させる

    // サーバーにいいね数を送信
    const response = await fetch('http://localhost:5000/posted/good/', {  // ここをサーバーのAPIエンドポイントに置き換える
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id:1 ,good:1}), // photoのURLやIDを送信
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
    // 成功したらローカルストレージに保存
    likedPhotos.push(photo.id);
    localStorage.setItem('likedPhotos', JSON.stringify(likedPhotos));
    }
  } catch (err) {
    console.error(err);
    photo.likes -= 1; // エラーが発生したら元に戻す
  }
}


function printph(){
  
  console.log(photos);
  console.log(photos.length);
}