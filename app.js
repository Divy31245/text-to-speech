const express = require('express');
const port = 8600;
const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile("D:/js projects/texttospeech/views/index.html")
})

app.listen(port, () => {
    console.log(`app is running on theee port ${port}`);
})