<script>
  import { onMount } from 'svelte';
  import {fetchPhotos,searchPhotos,likePhoto} from "./App.ts";
  // コンポーネントがマウントされたときに実行
  onMount(async() => {
    let body=await searchPhotos();
    console.log(body)

  });
</script>
<main>
  <div class="header">
    <a class="action-button" href="/">＜Homeに戻る</a>
  </div>
  <h1 class="title">埼玉ラリー投稿画面</h1>

    <div class="photo-view-container">
      <p class="view-instruction">ユーザー名</p>
      <div class="photo-view-area">
        <!-- 写真が表示されるための空のエリア -->
      </div>
    </div>
    <div class="iine-container">
      <!-- on:click を使ってボタンが押された時に handleSubmit 関数を実行 -->
      <button on:click={() => likePhoto(photo)} class="iine-button" >いいね！</button>
    </div>

    <div class="photo-view-container">
      <p class="view-instruction">ユーザー名</p>
      <div class="photo-view-area">
        <!-- 写真が表示されるための空のエリア -->
      </div>
    </div>
    <div class="iine-container">
      <!-- on:click を使ってボタンが押された時に handleSubmit 関数を実行 -->
      <button class="iine-button" >いいね！</button>
    </div>

    <div class="photo-view-container">
      <p class="view-instruction">ユーザー名</p>
      <div class="photo-view-area">
        <!-- 写真が表示されるための空のエリア -->
      </div>
    </div>
    <div class="iine-container">
      <!-- on:click を使ってボタンが押された時に handleSubmit 関数を実行 -->
      <button class="iine-button" >いいね！</button>
    </div>
</main>

<style>
  /* main要素の基本レイアウト設定 */
  main {
    text-align: center;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    position: relative;
  }

  /* ヘッダーのスタイル設定 */
  .header {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    box-sizing: border-box;
  }

  /* ボタンのスタイル設定 */
  .action-button {
    display: inline-block;
    padding: 10px;
    font-size: 20px;
    border: 2px solid #333;
    background-color: #f0f0f0;
    color: #333;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    margin: 0;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s, box-shadow 0.3s;
  }

  .action-button:hover {
    background-color: #ddd;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  }

  .title {
    margin-top: 60px;
    font-size: 2em;
    font-weight: bold;
  }

  .photo-view-container {
    margin-top: 20px;
    text-align: center;
    width: 80%;
  }

  .view-instruction {
    font-size: 1.2em;
    margin-bottom: 20px;
  }

  .photo-view-area {
    width: 100%;
    height: 600px;
    border: 2px dashed #333;
    background-color: #f0f0f0;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }

  .iine-container {
    
  }

  .iine-button {
    padding: 15px 30px;
    font-size: 1.2em;
    border: none;
    background-color: #ff8dec;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s, box-shadow 0.3s;
  }
</style>
