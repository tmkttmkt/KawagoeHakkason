<script>
  import { onMount } from 'svelte';
  import {searchPhotos,likePhoto} from "./App.ts";
  

  let body=[]
  // コンポーネントがマウントされたときに実行
  onMount(async() => {
    body=await searchPhotos();
    /*id: 7,
    photo: '1725859481255.png',
    where: '川越市',
    description: '画像に関する説明を入力',
    good: 0,
    who: 'user',
    topic: 'option1',
    when: '2024-09-09T05:24:41.262'*/
  });
</script>

<main>
  <div class="header">
    <a class="action-button" href="/">＜Homeに戻る</a>
  </div>
  <h1 class="title">埼玉ラリー投稿表示画面</h1>

  <!-- 1つ目の写真表示エリアといいねボタン -->
  {#each body as photo}
  <div class="photo-view-container">
    <p class="view-instruction">ユーザー名:{photo.who}</p>
      <p class="view-instruction">場所:{photo.where}</p>
      <p class="view-instruction">説明:{photo.description}</p>
      <p class="view-instruction">お題目:{photo.topic}</p>
    <div class="photo-view-area">
        {#if photo.photostring}
        <img src={photo.photostring
        } alt="Uploadedimage"/>
        {/if}
      <!-- 写真が表示されるための空のエリア -->
      <div class="iine-container">
        <div class="like-count">{photo.good}</div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="heart" on:click={() => {likePhoto(photo);photo.good++;photo.flg = !photo.flg;}} style="background-color: {photo.flg ? '#ff8dec' : '#ccc'};"></div>
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
    position: relative; /* 相対位置を指定 */
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
    position: relative; /* 相対位置 */
  }

  .iine-container {
    position: absolute;
    right: 20px; /* 右端に配置 */
    bottom: 20px;
    display: flex;
    align-items: center;
  }

  .like-count {
    margin-right: 10px; /* ハートとの間にスペースを追加 */
    font-size: 1.2em;
    font-weight: bold;
  }

  /* ハート形のボタン */
  .heart {
    width: 30px; /* ハートのサイズを小さく調整 */
    height: 27px; /* ハートのサイズを小さく調整 */
    position: relative;
    display: inline-block;
    cursor: pointer;
    background-color: #ccc; /* 初期はグレー */
    transform: rotate(-45deg); /* ハートの回転 */
    transition: background-color 0.3s;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }

  .heart:before, .heart:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: inherit; /* ハートの色を引き継ぐ */
  }

  .heart:before {
    top: -15px; /* ハートの上の円の位置を調整 */
    left: 0;
  }

  .heart:after {
    top: 0;
    left: 15px; /* ハートの右の円の位置を調整 */
  }

  .heart:hover {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  }
</style>
