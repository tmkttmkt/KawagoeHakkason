<script>
  var responseMessage = '';
  async function sendRequest1() {
    const data = {
      name: 'John Doe',
      pass: "aaasss"
    };

    try {
      const response = await fetch('https://kawagoe-hakkason-mjg1.vercel.app/personal/registration',{
        method: 'POST',
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        const result = await response.json();
        if(result.error){
          responseMessage = result.msg;
        }
        responseMessage = 'おｋ';
      } else {
        responseMessage = 'Request failed';
      }
    } catch (error) {
      responseMessage = `Error: ${error.message}`;
    }
  }
  async function sendRequest2() {
    const data = {
      name: 'John Doe',
      age: 30
    };

    try {
      const response = await fetch('https://kawagoe-hakkason-mjg1.vercel.app/personal',{
      method: 'POST',
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        const result = await response.json();
        if(result.error){
          responseMessage = result.msg;
        }
        responseMessage = 'おｋ';
      } else {
        responseMessage = 'Request failed';
      }
    } catch (error) {
      responseMessage = `Error: ${error.message}`;
    }
  }
  async function sendRequest3() {
    const data = {
      name: 'John Doe',
      age: 30
    };

    try {
      const response = await fetch('https://kawagoe-hakkason-mjg1.vercel.app/personal',{
      method: 'DELETE',
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        const result = await response.json();
        if(result.error){
          responseMessage = result.msg;
        }
        responseMessage = 'おｋ';
      } else {
        responseMessage = 'Request failed';
      }
    } catch (error) {
      responseMessage = `Error: ${error.message}`;
    }
  }
  async function sendRequest4() {
    const data = {
      name: 'John Doe',
      age: 30
    };

    try {
      const response = await fetch('https://kawagoe-hakkason-mjg1.vercel.app/personal',{
      method: 'DELETE',
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        const result = await response.json();
        if(result.error){
          responseMessage = result.msg;
        }
        responseMessage = 'おｋ';
      } else {
        responseMessage = 'Request failed';
      }
    } catch (error) {
      responseMessage = `Error: ${error.message}`;
    }
  }
</script>

<button on:click={sendRequest1}>登録</button>
<button on:click={sendRequest2}>参照</button>
<p>{responseMessage}</p>
