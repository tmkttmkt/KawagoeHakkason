<script>
  let responseMessage = '';

  async function sendRequest() {
    const data = {
      name: 'John Doe',
      age: 30
    };

    try {
      const response = await fetch('https://kawagoe-hakkason-mjg1-guhzm44xn-tmkts-projects.vercel.app/', {
        method: 'GET',
      });

      if (response.ok) {
        const result = await response.json();
        responseMessage = `Server response: ${result.message}`;
        console.log('Received response:', result);
      } else {
        responseMessage = 'Request failed';
      }
    } catch (error) {
      responseMessage = `Error: ${error.message}`;
    }
  }
</script>

<button on:click={sendRequest}>Send Request</button>
<p>{responseMessage}</p>
