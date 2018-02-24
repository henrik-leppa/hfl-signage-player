var express = require('express');
var multer = require('multer');

var app = express();

var storage = multer.diskStorage({
  destination: './uploads',
  filename: function(req, file, cb) {
    return cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });

app.post('/uploads', upload.single('file'), function (req, res, next) {
  console.log(req.file);
  console.log(req.body);
  return res.status(204).end();
});

app.use('/uploads', express.static('uploads'));

app.listen(3000, console.log('Listening on port 3000'));
