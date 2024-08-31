<script>
    let photo;
    let uploadResult = '';

    async function uploadPhoto() {
        const formData = new FormData();
        formData.append('photo', photo);

        const res = await fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: formData,
        });

        if (res.ok) {
            const data = await res.json();
            uploadResult = `Photo uploaded! You can view it <a href="http://localhost:5000${data.filePath}"  target="_blank">${data.filePath}</a>.`;
            console.log("Upload successful:", data.filePath);
        } else {
            uploadResult = 'Failed to upload photo.';
        }
    }
</script>

<input type="file" accept="image/*" on:change="{e => photo = e.target.files[0]}" />
<button on:click="{uploadPhoto}">Upload Photo</button>
<p>{@html uploadResult}</p>
