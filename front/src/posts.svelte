<script>
  import { Link } from "svelte-routing";
  import {createPost} from "./App.ts";
  let flg=true
  let test=""; 
  async function handleSubmit() {
    let flg1=true,flg2=true,flg3=true
    if(image1){
      flg1=await createPost({photo:image1,description:Description1,who:who1,topic:topic1})
    }
    if(image2){
      flg2=await createPost({photo:image2,description:Description2,who:who2,topic:topic2})
    }
    if(image3){
      flg3=await createPost({photo:image3,description:Description3,who:who3,topic:topic3})
    }
    if(flg1&&flg2&&flg3){
      alert("投稿が完了しました！");
    } else {
      alert("投稿が失敗しました！");
    }
    imageSrc1=null;
    imageSrc2=null;
    imageSrc3=null;
    image1=null;
    image2=null;
    image3=null;
    flg=true;
  }

  let imageSrc1, imageSrc2, imageSrc3;
  let image1, image2, image3;
  let Description1="画像に関する説明を入力", Description2="画像に関する説明を入力", Description3="画像に関する説明を入力";
  let who1="user", who2="user", who3="user";
  let topic1, topic2, topic3;

  function handleFileUpload(event, i) {
    const file = event.target.files?.[0];
    if (i === 1) {
      image1 = file;
      imageSrc1 = URL.createObjectURL(file);
    }
    if (i === 2) {
      image2 = file;
      imageSrc2 = URL.createObjectURL(file);
    }
    if (i === 3) {
      image3 = file;
      imageSrc3 = URL.createObjectURL(file);
    }
  }
</script>

<main>
  <title>埼玉ラリー</title>
  <div class="header">
    <a class="action-button" href="/">＜Homeに戻る</a>
  </div>
  <h1 class="title">埼玉ラリー投稿画面</h1>

  <div class="dropdown-container">
    <label for="dropdown1" class="dropdown-label">選択してください：</label>
    <select id="dropdown1" class="dropdown" bind:value={topic1}>
      <option value="風景（川越市）">風景（川越市）</option>
      <option value="食べ物（川越市）">食べ物（川越市）</option>
      <option value="夜景（川越市）">夜景（川越市）</option>
    </select>
    <div class="photo-upload-container">
      <label for="description1">画像の説明:</label>
      <input type="text" id="description1" bind:value={Description1} />
      <p><label for="wh1">ユーザー名:</label>
      <input type="text" id="wh1" bind:value={who1} /></p>
      <input type="file" accept="image/*" on:change={(event)=>handleFileUpload(event, 1)} />
      <div class="photo-upload-area">
        {#if imageSrc1}
          <img src={imageSrc1} alt="Uploaded" />
        {/if}
      </div>
    </div>
  </div>

  <div class="dropdown-container">
    <label for="dropdown2" class="dropdown-label">選択してください：</label>
    <select id="dropdown2" class="dropdown" bind:value={topic2}>
      <option value="風景（狭山市）">風景（狭山市）</option>
      <option value="食べ物（狭山市）">食べ物（狭山市）</option>
      <option value="夜景（狭山市）">夜景（狭山市）</option>
    </select>
    <div class="photo-upload-container">
      <label for="description2">画像の説明:</label>
      <input type="text" id="description2" bind:value={Description2} />
      <p><label for="wh2">ユーザー名:</label>
      <input type="text" id="wh2" bind:value={who2} /></p>
      <input type="file" accept="image/*" on:change={(event)=>handleFileUpload(event, 2)} />
      <div class="photo-upload-area">
        {#if imageSrc2}
          <img src={imageSrc2} alt="Uploaded" />
        {/if}
      </div>
    </div>
  </div>

  <div class="dropdown-container">
    <label for="dropdown3" class="dropdown-label">選択してください：</label>
    <select id="dropdown3" class="dropdown" bind:value={topic3}>
      <option value="風景（所沢市）">風景（所沢市）</option>
      <option value="食べ物（所沢市）">食べ物（所沢市）</option>
      <option value="夜景（所沢市）">夜景（所沢市）</option>
    </select>
    <div class="photo-upload-container">
      <label for="description3">画像の説明:</label>
      <input type="text" id="description3" bind:value={Description3} />
      <p><label for="wh3">ユーザー名:</label>
      <input type="text" id="wh3" bind:value={who3} /></p>
      <input type="file" accept="image/*" on:change={(event)=>handleFileUpload(event, 3)} />
      <div class="photo-upload-area">
        {#if imageSrc3}
          <img src={imageSrc3} alt="Uploaded" />
        {/if}
      </div>
    </div>
  </div>

  <div class="submit-button-container">
    <button class="submit-button" on:click={()=>{if(flg){flg=false;handleSubmit();}
                                                else {alert("先ほどの投稿を待ってください");}
    }}>投稿する</button>
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
    overflow: hidden;
  }

  .photo-upload-area img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
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
</style>

