<script>//getリクエスト
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


<script>//post リクエスト
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


<main>
    <button on:click={() => window.location.href = '/post'}>
        <me>投稿する→</me></button>
        <button on:click={() => window.location.href = '/view_posts'}>
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
  
    </style>