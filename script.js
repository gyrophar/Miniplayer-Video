const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Demande à l'utilisateur de selectionner un media, le transforme en element video, puis le joue
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Attrape les erreurs
    }
}


button.addEventListener('click', async () => {
    // Désactive le bouton
    button.disabled = true;
    // Commence l'image splittée
    await videoElement.requestPictureInPicture();
    // Reset le bouton
    button.disabled = false;
});

// Au chargement
selectMediaStream();