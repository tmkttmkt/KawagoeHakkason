<main>
    <button on:click={() => window.location.href = '/'}>ホームに戻る</button>
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
      top: 0; /* 画面の上部に配置 */
      left: 50%; /* 画面の横幅の50%の位置に配置 */
      transform: translateX(-50%); /* 左端基準の配置を中央基準に補正 */
      font-size: 20px; /* フォントサイズを0pxに設定 */
      color: #e7dede; /* テキストカラーを濃いグレーに設定 */
      margin: 0; /* h1要素の外側の余白をなくす */
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
  </style>
  