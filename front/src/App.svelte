<script lang="ts">
  // 投稿するための変数
  import { onMount } from 'svelte';

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
async function createPost() {
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
    } else {
      successMsg = `Post created with ID: ${data.body}`;
    }
  } catch (error) {
    errorMsg = "Failed to create post.";
  }
}
let photostring
// サーバーから写真取得
let photos: Array<{ id:number; description: string; likes: number ;photostring:string}> = [];
let error: string | null = null;


// サーバーから写真取得する関数
async function fetchPhotos(id:number) {
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
async function searchPhotos() {
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
}


// いいねボタンが押されたときの処理
async function likePhoto(photo: { id:number; description: string; likes: number ,photostring:string}) {
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

// コンポーネントがマウントされたときに実行
onMount(() => {
  searchPhotos();
});

function printph(){
  
  console.log(photos);
  console.log(photos.length);
}
</script>

<!-- postフォームの作成 -->
<form on:submit|preventDefault={createPost}>
  <input type="file" accept="image/*" on:change={(e) => photo = e.target .files?.[0] }/>
  <input type="text" bind:value={where} placeholder="Location" />
  <textarea bind:value={description} placeholder="Description"></textarea>
  <input type="text" bind:value={topic} placeholder="Topic" />
  <button type="submit">Create Post</button>
</form>

<button on:click={searchPhotos}>
  クリッffhdrfdrト
</button>


<main>
{#if successMsg}
<p>{successMsg}</p>
{/if}

{#if errorMsg}
<p>{errorMsg}</p>
{/if}


<p>{photos.length}</p>
<div class="photo-gallery">
  {#each photos as photo}
    <div class="photo-item">
      <img src={photo.photostring} alt="Image from Base64"/>
      <p>説明：{photo.description} </p>
      <div class="like-section">
        <button on:click={() => likePhoto(photo)}>👍 Like</button>
        <span>{photo.likes} Likes</span>
      </div>
    </div>
  {/each}
</div>
</main>
<style>
.photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Smaller min-width for mobile responsiveness */
  gap: 16px;
}

.photo-item {
  text-align: center;
}

.photo-item img {
  max-width: 100%;
  height: auto;
  border-radius: 8px; /* Rounded corners for a more modern look */
}

.like-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
}

.like-section button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px; /* Adjust font size for mobile */
}

.like-section button:hover {
  background-color: #0056b3;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  max-width: 400px;
  margin: 0 auto;
}

input, textarea, button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

button {
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

@media (max-width: 600px) {
  .photo-gallery {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* Smaller columns for smaller screens */
  }

  .like-section button {
    font-size: 12px; /* Adjust font size for smaller screens */
  }
}
</style>
<!-- 登録と参照のボタン
<button on:click="sendRequest1()">登録</button>
<button on:click="sendRequest2()">参照</button>
<p>{responseMessage}</p>-->