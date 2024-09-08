<script>
  let liked = [false, false, false];

  // いいねボタンをクリックしたときに色を入れ替える関数
  function toggleLike(index) {
    liked[index] = !liked[index]; // true/falseを切り替える
  }
</script>

<main>
  <div class="header">
    <a class="action-button" href="/">＜Homeに戻る</a>
  </div>
  <h1 class="title">埼玉ラリー投稿画面</h1>

  <!-- 1つ目の写真表示エリアといいねボタン -->
  <div class="photo-view-container">
    <p class="view-instruction">ユーザー名</p>
    <div class="photo-view-area">
      <!-- 写真が表示されるための空のエリア -->
      <div class="iine-container">
        <!-- クリックイベントで toggleLike 関数を呼び出し、色を変更 -->
        <button class="iine-button" on:click={() => toggleLike(0)} style="background-color: {liked[0] ? '#ff8dec' : '#ccc'};">❤️</button>
      </div>
    </div>
  </div>

  <!-- 2つ目の写真表示エリアといいねボタン -->
  <div class="photo-view-container">
    <p class="view-instruction">ユーザー名</p>
    <div class="photo-view-area">
      <!-- 写真が表示されるための空のエリア -->
      <div class="iine-container">
        <button class="iine-button" on:click={() => toggleLike(1)} style="background-color: {liked[1] ? '#ff8dec' : '#ccc'};">❤️</button>
      </div>
    </div>
  </div>

  <!-- 3つ目の写真表示エリアといいねボタン -->
  <div class="photo-view-container">
    <p class="view-instruction">ユーザー名</p>
    <div class="photo-view-area">
      <!-- 写真が表示されるための空のエリア -->
      <div class="iine-container">
        <button class="iine-button" on:click={() => toggleLike(2)} style="background-color: {liked[2] ? '#ff8dec' : '#ccc'};">❤️</button>
      </div>
    </div>
  </div>
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
  }

  .iine-button {
    width: 50px;
    height: 50px;
    border: none;
    background-color: #ccc; /* 初期のグレーカラー */
    color: white;
    border-radius: 50%; /* ボタンを円形にする */
    font-size: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s, box-shadow 0.3s;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }

  .iine-button:hover {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  }
</style>
