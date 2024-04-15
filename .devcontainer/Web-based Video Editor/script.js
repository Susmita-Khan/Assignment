document.addEventListener('DOMContentLoaded', function () {
    const videoFileInput = document.getElementById('videoFile');
    const processButton = document.getElementById('processButton');
    const processedVideoContainer = document.getElementById('processedVideo');

    processButton.addEventListener('click', processVideo);

    async function processVideo() {
        const file = videoFileInput.files[0];
        if (!file) {
            alert('Please select a video file.');
            return;
        }

        // Assuming you have an API endpoint for video processing
        const apiUrl = '/process-video';

        const formData = new FormData();
        formData.append('video', file);

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to process video');
            }

            const videoUrl = await response.json();

            // Display the processed video
            const videoElement = document.createElement('video');
            videoElement.src = videoUrl;
            videoElement.controls = true;

            processedVideoContainer.innerHTML = '';
            processedVideoContainer.appendChild(videoElement);
            processedVideoContainer.style.display = 'block';
        } catch (error) {
            console.error('Error processing video:', error);
            alert('An error occurred while processing the video.');
        }
    }
});