
import App from './App.svelte'

// ... existing code ...
/// <reference types="svelte" />

const app = new App({

  target: document.getElementById('app'),
})

export default app

// 追加: Svelteファイルの型宣言をインポー