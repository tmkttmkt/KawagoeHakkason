<script>
  import { Link } from "svelte-routing";
</script>

<main>
  <h1 class="shadow">埼玉ラリー</h1>
  <div class="image-container">
    <img src="./src/IMG_0919.jpg" alt="埼玉ラリーの画像" class="main-image">
  </div>
  <!-- 写真の下に「埼玉ラリーってなに？」のタイトルを配置 -->
  <h2 class="below-image">埼玉ラリーって何？</h2>
  <div class="button-container">
    <a class="action-button" href="/post">投稿する→</a>
    <a class="action-button" href="/view_posts">ほかの人の投稿を見る→</a>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: rgb(255, 255, 255);
  }

  .shadow {
    text-shadow: 3px 3px 3px #000, -3px -3px 3px #000,
                 -3px 3px 3px #000,  3px -3px 3px #000,
                 3px 0px 3px #000, -3px 0px 3px #000,
                 0px 3px 3px #000,  0px -3px 3px #000;
    margin: 0;
  }

  h1 {
    position: absolute; /* 画面内の特定の位置に要素を配置 */
    top: 10%; /* 画面の上から20%の位置に配置（画像に重なる位置） */
    left: 50%; /* 横幅の50%に配置 */
    transform: translateX(-50%); /* 左端基準の配置を中央基準に補正 */
    font-size: 100px;
    color: #e7dede;
    margin: 0;
  }

  /* 写真の下に配置するh2のスタイル */
  h2.below-image {
    font-size: 20px;
    color: #333;
    margin: 20px 0;
  }

  .image-container {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    width: 100%;
  }

  .main-image {
    width: 100vw;
    height: auto;
    max-height: 50vh;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px 0;
  }

  .action-button {
    display: inline-block;
    width: 40%;
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

  .action-button:hover {
    background-color: #ddd;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 35px;
    }

    h2.below-image {
      font-size: 18px;
    }

    .action-button {
      width: 80%;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 30px;
    }

    h2.below-image {
      font-size: 16px;
    }

    .main-image {
      max-height: 30vh;
    }
  }
</style>
