import Header from './Header.svelte'
// ... existing code ...
/// <reference types="svelte" />

const app = new Header({

  target: document.getElementById('app'),
})

export default app

// 追加: Svelteファイルの型宣言をインポー