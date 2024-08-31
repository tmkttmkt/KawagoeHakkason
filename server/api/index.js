const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static('uploads'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // ユニークなファイル名にする
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('photo'), (req, res) => {
    if (req.file) {
        res.json({ filePath: `/${req.file.filename}` });
    } else {
        res.status(400).json({ error: 'Failed to upload file' });
    }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
