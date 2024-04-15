// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Handle video processing requests
app.post('/process-video', (req, res) => {
    // Process video using FFmpeg or a similar library/service
    // Return the processed video URL
    const processedVideoUrl = 'https://example.com/processed-video.mp4';
    res.json({ url: processedVideoUrl });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const ffmpeg = require('fluent-ffmpeg');

// Input video file path
const inputFilePath = 'input.mp4';
// Output video file path
const outputFilePath = 'output.mp4';

// Resize the video to 640x360 resolution
ffmpeg(inputFilePath)
    .output(outputFilePath)
    .size('640x360')
    .on('end', () => {
        console.log('Video processing finished');
    })
    .on('error', (err) => {
        console.error('Error processing video:', err);
    })
    .run();
