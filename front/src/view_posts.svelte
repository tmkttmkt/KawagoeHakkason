<script>
  import { onMount } from 'svelte';
  import { searchPhotos, likePhoto } from "./App.ts";

  let body = [];
  onMount(async () => {
    body = await searchPhotos();
  });
</script>

<svelte:head>
  <title>埼玉ラリー</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="./aicon.png" />
</svelte:head>

<main>
  <div class="header">
    <a class="action-button" href="/">＜Homeに戻る</a>
  </div>
  <h1 class="title">埼玉ラリー投稿表示画面</h1>

  {#each body as photo}
  <div class="photo-view-container">
    <p class="view-instruction">ユーザー名:{photo.who}</p>
    <p class="view-instruction">場所:{photo.where}</p>
    <p class="view-instruction">説明:{photo.description}</p>
    <p class="view-instruction">お題目:{photo.topic}</p>
    <div class="photo-view-area">
      {#if photo.photostring}
      <img src={photo.photostring} alt="Uploaded" class="photo"/>
      {/if}
      <div class="iine-container">
        <div class="like-count">{photo.good}</div>
        <button class="sweet-potato" 
          on:click={() => {
            likePhoto(photo, photo.flg ? 1 : -1);
            photo.good += photo.flg ? 1 : -1;
            photo.flg = !photo.flg;
          }}
          style="filter: {photo.flg ? 'grayscale(100%)' : 'none'};"
          type="button">
          🍠
        </button>    
      </div>
    </div>
  </div>
  {/each}
</main>

<style>
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

  .header {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    box-sizing: border-box;
  }

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
    position: relative;
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
    position: relative;
    overflow: hidden; /* 画像が枠をはみ出ないようにする */
  }

  .photo {
    width: 100%;
    height: 100%;
    object-fit: contain; /* 比率を維持して枠内に収める */
  }

  .iine-container {
    position: absolute;
    right: 20px;
    bottom: 20px;
    display: flex;
    align-items: center;
    padding: 10px; /* パディングを追加して四角のボックスを作成 */
    background-color: rgba(255, 255, 255, 0.9); /* 背景色を白にして若干の透明度 */
    border-radius: 8px; /* 角を少し丸く */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* ボックスに影を追加 */
  }

  .like-count {
    margin-right: 10px;
    font-size: 1.2em;
    font-weight: bold;
  }

  .sweet-potato {
    font-size: 30px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    outline: none;
    transition: filter 0.3s ease;
  }

  .sweet-potato:hover {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  }
</style>
