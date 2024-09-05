<!--<script>//getリクエスト
  import { onMount } from 'svelte';
  let data = null;
  let loading = true;
  let error = null;
  onMount(async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      data = await response.json();
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
  });
</script>
{#if loading}
  <p>Loading...</p>
{:else if error}
  <p>Error: {error}</p>
{:else}
  <pre>{JSON.stringify(data, null, 2)}</pre>
{/if}

  let postData = { name: 'John Doe' };
  let responseMessage = '';

  async function sendData() {
    try {
      const response = await fetch('https://api.example.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      responseMessage = result.message;
    } catch (err) {
      responseMessage = `Error: ${err.message}`;
    }
  }
</script>
<button on:click={sendData}>Send Data</button>
<p>{responseMessage}</p>
-->

<main>
  <h1 class="shadow">埼玉ラリー</h1>
  <!-- 画像を中央に配置するためのコンテナ -->
  <div class="image-container">
    <img src="./src/IMG_0919.jpg" alt="埼玉ラリーの画像" class="main-image">
  </div>
  <!-- ボタンを縦に並べて中央に配置するためのコンテナ -->
  <h2 class="shadow">埼玉ラリーって何？</h2>
  <div class="button-container">
    <button on:click={() => window.location.href = './src/post.svelte'}>
      <me>投稿する→</me>
    </button>
    <button on:click={() => window.location.href = './src/view_post.svelte'}>
      <other>ほかの人の投稿を見る→</other>
    </button>
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
