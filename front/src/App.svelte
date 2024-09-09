<script lang="ts">
/*  // 登録リクエストを送信する関数
  async function sendRequest1() {
    const data = {
      name: 'John Doe',
      pass: 'aaasss'
    };
    let responseMessage = '';

    try {
      const response = await fetch('https://kawagoe-hakkason-mjg1.vercel.app/personal/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const result = await response.json();
        if (result.error) {
          responseMessage = result.msg;
        } else {
          responseMessage = 'おｋ';
        }
      } else {
        responseMessage = 'リクエストが失敗しました';
      }
    } catch (error) {
      responseMessage = `エラー: ${error.message}`;
    }
  }*/

  // 投稿するための変数
  import { onMount } from 'svelte';

// 投稿するための変数
let photo: File | null = null;
let where: string = "";
let description: string = "";
let topic: string = "";
let who: string = "user";
let successMsg: string = "";
let errorMsg: string = "";

// 投稿を作成する関数
async function createPost() {
  try {
    const formData = new FormData();
    if (photo) formData.append("photo", photo);
    formData.append("where", where);
    formData.append("description", description);
    formData.append("topic", topic);
    formData.append("who", who);

    const res = await fetch("/posted", {
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

// サーバーから写真取得
let photos: Array<{ url: string; description: string; likes: number }> = [];
let error: string | null = null;

// サーバーから写真を取得する関数
async function fetchPhotos() {
  try {
    const response = await fetch('https://example.com/api/photos'); // ここをサーバーのAPIエンドポイントに置き換える
    if (response.ok) {
      photos = await response.json();
    } else {
      error = "Failed to load photos";
    }
  } catch (err) {
    error = err.message;
  }
}

// いいねボタンが押されたときの処理
function likePhoto(photo: { likes: number }) {
  photo.likes += 1;
}

// コンポーネントがマウントされたときに実行
onMount(() => {
  fetchPhotos();
});
</script>

<!-- postフォームの作成 -->
<form on:submit|preventDefault={createPost}>
  <input type="file" accept="image/*" on:change={(e) => photo = e.target .files?.[0] }/>
  <input type="text" bind:value={where} placeholder="Location" />
  <textarea bind:value={description} placeholder="Description"></textarea>
  <input type="text" bind:value={topic} placeholder="Topic" />
  <button type="submit">Create Post</button>
</form>

{#if successMsg}
<p>{successMsg}</p>
{/if}

{#if errorMsg}
<p>{errorMsg}</p>
{/if}

<main>
{#if error}
  <p>{error}</p>
{:else if photos.length === 0}
  <p>Loading photos...</p>
{:else}
  <div class="photo-gallery">
    {#each photos as photo}
      <div class="photo-item">
        <img src={photo.url} alt={photo.description} />
        <p>{photo.description}</p>
        <div class="like-section">
          <button on:click={() => likePhoto(photo)}>👍 Like</button>
          <span>{photo.likes} Likes</span>
        </div>
      </div>
    {/each}
  </div>
{/if}
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
/*<!-- 登録と参照のボタン
<button on:click="sendRequest1()">登録</button>
<button on:click="sendRequest2()">参照</button>
<p>{responseMessage}</p>-->*/