document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const fileInput = document.getElementById('videoFile');
    const titleInput = document.getElementById('title');

    const formData = new FormData();
    formData.append('video', fileInput.files[0]);
    formData.append('title', titleInput.value);

    try {
        const response = await fetch('http://localhost:3000/api/videos', {
            method: 'POST',
            body: formData
        });
        const result = await response.json();
        alert(result.message);
        // Rafraîchir la liste des vidéos (à développer)
    } catch (error) {
        console.error('Erreur lors de l\'upload de la vidéo:', error);
    }
});
