<script>
  import { Link } from "svelte-routing";
</script>

<svelte:head>
  <title>埼玉ラリー</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="./aicon.png" />
  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="埼玉ラリー" />
  <meta property="og:description" content="埼玉ラリーとは、お題を一つ選び、お題に沿った場所の写真を投稿するSNSです" />
  <meta property="og:image" content="./photo0000-7484.jpg" />
  <meta property="og:url" content=https://kawagoe-hakkason.vercel.app/ />
  <meta property="og:type" content="website" />
</svelte:head>

<main>
  <!-- 画像を中央に配置するためのコンテナ -->
  <div class="image-container">
    <h1 class="shadow">埼玉ラリー</h1>
    <img src="./photo0000-7484.jpg" alt="埼玉ラリーの画像" class="main-image">
  </div>
  <!-- 画像の下に「埼玉ラリーって何？」のタイトルを配置 -->
  <h2 class="shadow below-image">埼玉ラリーって何？</h2>
  <!-- 本文を追加 -->
  <p class="description">
    説明しよう！埼玉ラリーとは、お題を一つ選び、お題に沿った場所の写真を投稿することで、その時だけのメッセージカードを手に入れよう！
  </p>
  <!-- ボタンを縦に並べて中央に配置するためのコンテナ -->
  <div class="button-container">
    <a class="action-button" href="/post">投稿する→</a>
    <a class="action-button" href="/view_posts">ほかの人の投稿を見る→</a>
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
    justify-content: flex-start;
    min-height: 100vh; 
    background-color: #f0f0f0;
    padding: 0; 
  }

  /* h1の文字の縁取り設定 */
  .shadow {
    text-shadow:
      3px 3px 3px #000, -3px -3px 3px #000,
      -3px 3px 3px #000,  3px -3px 3px #000,
      3px 0px 3px #000, -3px 0px 3px #000,
      0px 3px 3px #000,  0px -3px 3px #000;
    margin: 0;
  }

  /* h1を画像の上に重ねるスタイル設定 */
  .image-container {
    position: relative; 
    width: 100vw;
    max-height: 50vh; 
    overflow: hidden;
  }

  h1 {
    position: absolute; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    font-size: 50px;
    color: #fff;
    z-index: 1;
  }

  /* 画像のスタイル設定 */
  .main-image {
    width: 100%;
    height: auto;
    max-height: 50vh;
  }

  /* h2要素（タイトル）のスタイル設定 */
  h2.below-image {
    font-size: 20px;
    color: #e7dede; 
    margin: 10px 0;
  }

  /* 本文（説明文）のスタイル設定 */
  .description {
    font-size: 18px;
    color: #333;
    margin: 20px;
    line-height: 1.6;
  }

  /* ボタンコンテナのスタイル設定 */
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; 
    padding: 10px 0;
  }

  /* ボタンのスタイル設定 */
  .action-button {
    display: inline-block;
    width: auto;
    min-width: 200px;
    padding: 10px;
    font-size: 20px;
    border: 2px solid #333;
    background-color: #f0f0f0;
    color: #333;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    margin: 10px 0;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); 
    transition: background-color 0.3s, box-shadow 0.3s; 
  }

  /* ボタンをホバーした際のスタイル */
  .action-button:hover {
    background-color: #ddd; 
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  }

  /* メディアクエリ（スマホ対応） */
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 30px;
    }

    h2.below-image {
      font-size: 16px;
    }

    .description {
      font-size: 14px; 
    }

    .main-image {
      max-height: 30vh; 
    }
  }
</style>
