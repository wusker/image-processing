const express = require('express');
const cors = require('cors');
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}`);
  },
});

const upload = multer({ storage }).single('image');
const app = express();

app.use(
  cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500'],
  })
);

app.post('/upload', (req, res) => {
  upload(req, res, err => {
    if (err) {
      console.log(err);
      res.send('Error uploading!');
    } else {
      console.log(req.file);
      res.send('test');
    }
  });
});

app.use('/', (req, res) => {
  res.json({
    welcome: 'Welcome to the Image Processor',
  });
});

const port = 9090;
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
