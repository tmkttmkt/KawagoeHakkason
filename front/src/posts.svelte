<script>
  import { Link } from "svelte-routing";

  // 投稿ボタンを押した際にダイアログボックスを表示
  function handleSubmit() {
    alert("投稿が完了しました！");
  }
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

  <div class="submit-button-container">
    <!-- on:click を使ってボタンが押された時に handleSubmit 関数を実行 -->
    <button class="submit-button" on:click={handleSubmit}>投稿する</button>
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

  /* プルダウンリストのスタイル設定 */
  .dropdown-container {
    margin-top: 20px;
    text-align: center;
    width: 80%;
  }

  .dropdown-label {
    display: block;
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  .dropdown {
    padding: 10px;
    font-size: 1em;
    border: 2px solid #333;
    border-radius: 5px;
    background-color: #f0f0f0;
    color: #333;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s, box-shadow 0.3s;
  }

  .dropdown:hover {
    background-color: #ddd;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  }

  .photo-upload-container {
    margin-top: 20px;
    text-align: center;
  }

  .upload-instruction {
    font-size: 1.2em;
    margin-bottom: 20px;
  }

  .photo-upload-area {
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

  .submit-button-container {
    margin-top: 100px;
    text-align: center;
  }

  .submit-button {
    padding: 15px 30px;
    font-size: 1.2em;
    border: none;
    background-color: #4CAF50;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s, box-shadow 0.3s;
  }

  .submit-button:hover {
    background-color: #45a049;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  }
  
  button {
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.7;
  }
</style>
