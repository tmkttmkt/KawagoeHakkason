<script>
  import { Link } from "svelte-routing";
</script>

<main>
  <h1 class="shadow">埼玉ラリー投稿画面</h1>
  <div class="button-container">
    <a class="action-button" href="/">＜Homeに戻る</a>
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
    background-color:rgb(255, 255, 255);
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
    width: 80%; /* ボタンの幅をビューポート幅の80%に設定 */
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