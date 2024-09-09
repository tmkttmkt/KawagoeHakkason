<script>
  import { onMount } from 'svelte';
  import {searchPhotos,likePhoto} from "./App.ts";

  let body = []
  onMount(async () => {
    body = await searchPhotos();
  });
</script>

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
      <img src={photo.photostring} alt="Uploaded image" class="photo"/>
      {/if}
      <div class="iine-container">
        <div class="like-count">{photo.good}</div>
        <div class="heart" on:click={() => {likePhoto(photo); photo.good++; photo.flg = !photo.flg;}} 
             style="background-color: {photo.flg ? '#ff8dec' : '#ccc'};">
        </div>
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
  }

  .like-count {
    margin-right: 10px;
    font-size: 1.2em;
    font-weight: bold;
  }

  .heart {
    width: 30px;
    height: 30px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    background-color: #ccc;
    transform: rotate(-45deg);
    transition: background-color 0.3s;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }

  .heart:before, .heart:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: inherit;
  }

  .heart:before {
    top: -15px;
    left: 0;
  }

  .heart:after {
    top: 0;
    left: 15px;
  }

  .heart:hover {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  }
</style>