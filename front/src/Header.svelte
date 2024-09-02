<main>
    <h1>埼玉ラリー</h1>
    <!-- 画像を中央に配置するために、新しく div 要素を追加し、image-container クラスを付与 -->
    <div class="image-container">
      <img src="./src/IMG_0919.jpg" alt="埼玉ラリーの画像" class="main-image">
    </div>
    <button on:click={() => window.location.href = '/post'}>
      <me>投稿する→</me>
    </button>
    <button on:click={() => window.location.href = '/view/posts'}>
      <other>ほかの人の投稿を見る→</other>
    </button>
  </main>
  
  <style>
    /* main要素のレイアウトをflexboxに変更し、コンテンツを中央に配置 */
    main {
      text-align: center;
      padding: 1em;
      margin: 0;
      max-width: 240px;
  
      /* Flexboxの設定 */
      display: flex; /* Flexboxレイアウトに変更 */
      flex-direction: column; /* 子要素を縦方向に並べる */
      align-items: center; /* 子要素を水平方向の中央に揃える */
      justify-content: center; /* 子要素を垂直方向の中央に揃える */
      min-height: 100vh; /* mainの高さを画面全体（ビューの高さ）に設定 */
    }
  
    h1 {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      font-size: 50px;
      color: #333;
      margin: 0;
      padding: 20px 0;
    }
  
    /* 画像を中央に配置するためのコンテナ設定 */
    .image-container {
      display: flex; /* Flexboxレイアウトに変更 */    
      justify-content: center; /* 画像を水平方向の中央に揃える */
      flex-grow: 1; /* 可能な限りコンテナを伸ばす。main全体の高さを満たすために使用 */
    }
  
    /* 画像の大きさと表示を調整 */
    .main-image {
      width: 100vw; /* 画像の幅をビューの幅の3分の2に設定 */
      height: auto; /* 画像の高さを自動で調整し、アスペクト比を維持 */
      max-height: 50vh; /* 画像の高さがビューの高さの2分の1を超えないように設定 */
    }
  
    me {
      position: fixed;
      bottom: 0;
      left: 0;
      padding: 10px;
      font-size: 50px;
      border: 1px solid #333;
      background-color: #f0f0f0;
      color: #333;
    }
  
    other {
      position: fixed;
      bottom: 0;
      right: 0;
      padding: 10px;
      font-size: 50px;
      border: 1px solid #333;
      background-color: #f0f0f0;
      color: #333;
    }
  </style>