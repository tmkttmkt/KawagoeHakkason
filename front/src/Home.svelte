<script>
  import { Link } from "svelte-routing";
</script>

<main>
  <h1 class="shadow">埼玉ラリー</h1>
  <!-- 画像を中央に配置するためのコンテナ -->
  <div class="image-container">
    <img src="./src/IMG_0919.jpg" alt="埼玉ラリーの画像" class="main-image">
  </div>
  <!-- ボタンを縦に並べて中央に配置するためのコンテナ -->
  <h2 class="shadow">埼玉ラリーって何？</h2>
  <div class="button-container">
    <a class="action-button" href="/post">投稿する→</a>
    <a class="action-button" href="/view_posts">ほかの人の投稿を見る→</a>
  </div>
</main>

<style>
  /* main要素の基本レイアウト設定 */
  main {
    text-align: center; /* テキストを中央に揃える */
    /*padding: 1em; /* コンテンツ周囲に余白を追加 写真を上にするためいったんコメントアウト*/
    margin: 0; /* 要素の外側の余白をなくす */
    /* Flexboxレイアウトの設定 */
    display: flex; /* Flexboxレイアウトを使用する */
    flex-direction: column; /* 子要素を縦方向に並べる */
    align-items: center; /* 子要素を水平方向の中央に揃える */
    justify-content: center; /* 子要素を垂直方向の中央に揃える */
    min-height: 100vh; /* main要素の高さを画面全体（ビューポートの高さ）に設定 */
    background-color:rgb(208, 252, 179);
  }

  /*h1の文字の縁取り設定(ぼやけた感じ)*/
  .shadow{
    text-shadow:
            3px 3px 3px #000, -3px -3px 3px #000,
           -3px 3px 3px #000,  3px -3px 3px #000,
            3px 0px 3px #000, -3px -0px 3px #000,
            0px 3px 3px #000,  0px -3px 3px #000;
    margin: 0;
  }

  /* h1要素（タイトル）のスタイル設定 */
  h1 {
    position: absolute; /* 画面内の特定の位置に要素を配置するための絶対配置 */
    top: 0; /* 画面の上部に配置 */
    left: 50%; /* 画面の横幅の50%の位置に配置 */
    transform: translateX(-50%); /* 左端基準の配置を中央基準に補正 */
    font-size: 50px; /* フォントサイズを50pxに設定 */
    color: #e7dede; /* テキストカラーを濃いグレーに設定 */
    margin: 0; /* h1要素の外側の余白をなくす */
    padding: 20px 0; /* 上下に20pxの内側余白を追加 */
  }

  /* h2要素（タイトル）のスタイル設定 */
  h2 {
    position: absolute; /* 画面内の特定の位置に要素を配置するための絶対配置 */
    top: 52%; /* 画面の上から60%の位置に配置 */
    left: 50%; /* 画面の横幅の50%の位置に配置 */
    transform: translateX(-50%); /* 左端基準の配置を中央基準に補正 */
    font-size: 20px; /* フォントサイズを20pxに設定 */
    color: #e7dede; /* テキストカラーを濃いグレーに設定 */
    padding: 20px 0; /* 上下に20pxの内側余白を追加 */
  }

  /* 画像コンテナのスタイル設定 */
  .image-container {
    display: flex; /* Flexboxレイアウトを使用 */
    justify-content: center; /* コンテナ内の画像を中央に揃える */
    flex-grow: 1; /* コンテナが可能な限り縦に伸びるように設定 */
  }

  /* 画像のスタイル設定 */
  .main-image {
    width: 100vw; /* 画像の幅をビューポートの幅全体に設定 */
    height: auto; /* 画像の高さを自動調整し、アスペクト比を維持 */
    max-height: 50vh; /* 画像の高さがビューポートの高さの50%を超えないように設定 */
  }

  /* ボタンコンテナのスタイル設定 */
  .button-container {
    display: flex; /* Flexboxレイアウトを使用 */
    flex-direction: column; /* ボタンを縦方向に並べる */
    align-items: center; /* ボタンを中央に揃える */
    width: 100%; /* コンテナの幅をビューポートの幅全体に設定 */
    padding: 10px 0; /* 上下に10pxの余白を追加 */
  }

  /* ボタンのスタイル設定 */
  .action-button {
    display: inline-block; /* ボタンをインラインブロックにする */
    width: 40%; /* ボタンの幅をビューポート幅の80%に設定 */
    padding: 10px; /* ボタン内のテキストに対して10pxの内側余白を追加 */
    font-size: 20px; /* フォントサイズを20pxに設定 */
    border: 2px solid #333; /* ボタンに濃いグレーの境界線を追加 */
    background-color: #f0f0f0; /* ボタンの背景色を薄いグレーに設定 */
    color: #333; /* ボタンのテキストカラーを濃いグレーに設定 */
    border-radius: 10px; /* ボタンの角を少し丸める */
    text-align: center; /* テキストを中央に配置 */
    text-decoration: none; /* リンクの下線をなくす */
    margin: 10px 0; /* ボタン間に10pxの上下の外側余白を追加 */
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* ボタンに軽い影を追加 */
    transition: background-color 0.3s, box-shadow 0.3s; /* ホバー時のアニメーションを追加 */
  }

  /* ボタンをホバーした際のスタイル */
  .action-button:hover {
    background-color: #ddd; /* ホバー時に背景色を少し暗くする */
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4); /* ホバー時に影を強調 */
  }
</style>