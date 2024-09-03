const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // ユニークなファイル名にする
    }
});
const upload = multer({ storage: storage });
router.post('/upload', upload.single('photo'), (req, res) => {
    if (req.file) {
        res.json({ filePath: `/${req.file.filename}` });
    } else {
        res.status(400).json({ error: 'Failed to upload file' });
    }
});

module.exports = router;