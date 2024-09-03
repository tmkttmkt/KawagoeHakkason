<script>
    import { Link } from "svelte-routing";
</script>

<main>
    <h1>埼玉ラリー</h1>
    <div class="me">
        <Link to="./post.svelte">漢字クイズアプリ</Link></div>
    <div class="other">
        <Link to="./view_posts.svelte">漢字クイズアプリ</Link></div>
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