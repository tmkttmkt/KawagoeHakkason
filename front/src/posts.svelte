<script>
  import { Link } from "svelte-routing";
</script>

<main>
  <div class="header">
    <a class="action-button" href="/">＜Homeに戻る</a>
  </div>
  <h1 class="title">埼玉ラリー投稿画面</h1>

  <div class="dropdown-container">
    <label for="dropdown1" class="dropdown-label">選択してください：</label>
    <select id="dropdown1" class="dropdown">
      <option value="option1">オプション 1</option>
      <option value="option2">オプション 2</option>
      <option value="option3">オプション 3</option>
    </select>
    <div class="photo-upload-container">
      <p class="upload-instruction">ここに写真を貼り付けてください。</p>
      <div class="photo-upload-area">
        <!-- ユーザーが写真を張り付けるための空のエリア -->
      </div>
    </div>
  </div>

  <div class="dropdown-container">
    <label for="dropdown2" class="dropdown-label">選択してください：</label>
    <select id="dropdown2" class="dropdown">
      <option value="option1">オプション 1</option>
      <option value="option2">オプション 2</option>
      <option value="option3">オプション 3</option>
    </select>
    <div class="photo-upload-container">
      <p class="upload-instruction">ここに写真を貼り付けてください。</p>
      <div class="photo-upload-area">
        <!-- ユーザーが写真を張り付けるための空のエリア -->
      </div>
    </div>
  </div>

  <div class="dropdown-container">
    <label for="dropdown3" class="dropdown-label">選択してください：</label>
    <select id="dropdown3" class="dropdown">
      <option value="option1">オプション 1</option>
      <option value="option2">オプション 2</option>
      <option value="option3">オプション 3</option>
    </select>
    <div class="photo-upload-container">
      <p class="upload-instruction">ここに写真を貼り付けてください。</p>
      <div class="photo-upload-area">
        <!-- ユーザーが写真を張り付けるための空のエリア -->
      </div>
    </div>
  </div>
</main>

<style>
  /* main要素の基本レイアウト設定 */
  main {
    text-align: center; /* テキストを中央に揃える */
    margin: 0; /* 要素の外側の余白をなくす */
    /* Flexboxレイアウトの設定 */
    display: flex; /* Flexboxレイアウトを使用する */
    flex-direction: column; /* 子要素を縦方向に並べる */
    align-items: center; /* 子要素を水平方向の中央に揃える */
    justify-content: center; /* 子要素を垂直方向の中央に揃える */
    background-color: rgb(255, 255, 255);
    position: relative; /* 相対位置を指定 */
  }

  /* ヘッダーのスタイル設定 */
  .header {
    position: absolute; /* 絶対位置を指定 */
    top: 0; /* 上端に配置 */
    left: 0; /* 左端に配置 */
    padding: 10px; /* 内側に余白を追加 */
    box-sizing: border-box; /* 幅と高さに内側余白と境界線を含める */
  }

  /* ボタンのスタイル設定 */
  .action-button {
    display: inline-block; /* ボタンをインラインブロックにする */
    padding: 10px; /* ボタン内のテキストに対して10pxの内側余白を追加 */
    font-size: 20px; /* フォントサイズを20pxに設定 */
    border: 2px solid #333; /* ボタンに濃いグレーの境界線を追加 */
    background-color: #f0f0f0; /* ボタンの背景色を薄いグレーに設定 */
    color: #333; /* ボタンのテキストカラーを濃いグレーに設定 */
    border-radius: 10px; /* ボタンの角を少し丸める */
    text-align: center; /* テキストを中央に配置 */
    text-decoration: none; /* リンクの下線をなくす */
    margin: 0; /* 上下の外側余白をリセット */
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* ボタンに軽い影を追加 */
    transition: background-color 0.3s, box-shadow 0.3s; /* ホバー時のアニメーションを追加 */
  }

  /* ボタンをホバーした際のスタイル */
  .action-button:hover {
    background-color: #ddd; /* ホバー時に背景色を少し暗くする */
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4); /* ホバー時に影を強調 */
  }

  /* タイトルのスタイル設定 */
  .title {
    margin-top: 60px; /* ヘッダーの下に余白を追加 */
    font-size: 2em; /* フォントサイズを調整 */
    font-weight: bold; /* フォントを太字に */
  }

  /* プルダウンリストのスタイル設定 */
  .dropdown-container {
    margin-top: 20px; /* タイトルとプルダウンリストの間に余白を追加 */
    text-align: center; /* テキストを中央に揃える */
    width: 80%; /* コンテナの幅を調整 */
  }

  .dropdown-label {
    display: block; /* ラベルをブロック要素に */
    font-size: 1.2em; /* フォントサイズを調整 */
    margin-bottom: 10px; /* ラベルとプルダウンリストの間に余白を追加 */
  }

  .dropdown {
    padding: 10px; /* 内側の余白を追加 */
    font-size: 1em; /* フォントサイズを調整 */
    border: 2px solid #333; /* 境界線を追加 */
    border-radius: 5px; /* 角を丸める */
    background-color: #f0f0f0; /* 背景色を設定 */
    color: #333; /* テキストカラーを設定 */
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* 軽い影を追加 */
    transition: background-color 0.3s, box-shadow 0.3s; /* ホバー時のアニメーションを追加 */
  }

  .dropdown:hover {
    background-color: #ddd; /* ホバー時に背景色を少し暗くする */
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4); /* ホバー時に影を強調 */
  }

  /* 写真アップロードエリアのスタイル設定 */
  .photo-upload-container {
    margin-top: 20px; /* プルダウンリストとアップロードエリアの間に余白を追加 */
    text-align: center; /* テキストを中央に揃える */
    width: 80%; /* コンテナの幅を調整 */
  }

  .upload-instruction {
    font-size: 1.2em; /* フォントサイズを調整 */
    margin-bottom: 20px; /* 指示文とアップロードエリアの間に余白を追加 */
  }

  .photo-upload-area {
    width: 100%; /* アップロードエリアの幅を調整 */
    max-width: 600px; /* アップロードエリアの最大幅を設定 */
    height: 300px; /* アップロードエリアの高さを設定 */
    border: 2px dashed #333; /* 点線の境界線を追加 */
    border-radius: 10px; /* 角を丸める */
    background-color: #f0f0f0; /* 背景色を設定 */
    color: #333; /* テキストカラーを設定 */
    display: flex; /* フレックスボックスレイアウトを使用 */
    align-items: center; /* 縦方向の中央に揃える */
    justify-content: center; /* 横方向の中央に揃える */
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* 軽い影を追加 */
  }
</style>
