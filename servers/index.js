const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/upload-image', async (req, res) => {
  try {
    const imgbbApiKey = '85126d0a02bb0a7461c7c3e5ef545aac';
    const imgbbUploadUrl = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;

    // Use req.body directly to access form data
    const imgbbResponse = await axios.post(imgbbUploadUrl, req.body);

    res.json({ imageUrl: imgbbResponse.data.data.url });
  } catch (error) {
    console.error('Error uploading image to ImgBB:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
