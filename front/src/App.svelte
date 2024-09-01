
<main>
  <h1>埼玉ラリー</h1>
  <button on:click={() => window.location.href = 'sample.html'}>
  <me>投稿する→</me></button>
  <button on:click={() => window.location.href = 'sample.html'}>
  <other>ほかの人の投稿を見る→</other></button>
  </main>
  
  <style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0;
    max-width: 240px;
  }
  
  h1 {
    position: absolute; /* 絶対位置に設定 */
    top: 0; /* 画面の上部に配置 */
    left: 50%; /* 水平方向の中央に配置 */
    transform: translateX(-50%); /* 中央寄せのための補正 */
    font-size: 50px;
    color: #333;
    margin: 0; /* デフォルトの余白を削除 */
    padding: 20px 0; /* 少しスペースを追加 */
  }
  
  me {
    position: fixed; /* 固定位置に設定 */
    bottom: 0; /* 画面の下部に配置 */
    left: 0; /* 左端に配置 */
    padding: 10px;
    font-size: 50px;
    border: 1px solid #333; /* 周りに線を追加 */
    background-color: #f0f0f0;
    color: #333;
  }
  
  other {
    position: fixed; /* 固定位置に設定 */
    bottom: 0; /* 画面の下部に配置 */
    right: 0; /* 右端に配置 */
    padding: 10px;
    font-size: 50px;
    border: 1px solid #333; /* 周りに線を追加 */
    background-color: #f0f0f0;
    color: #333;
  }
  
  /*button {
    background-color: #333;
    color: white;
    border: none;
    padding: 0.5em 1em;
    font-size: 1em;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #555;
  }*/
  </style>