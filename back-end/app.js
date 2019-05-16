require('dotenv').config();
var express = require('express');
var cors = require('cors');
var multer = require('multer');
var serveIndex = require('serve-index');
var PouchDB = require('pouchdb');
var expressPouchDB = require('express-pouchdb');

var app = express();
var uploadPath = 'uploads';
var databasePath = 'database';

app.use(cors());

app.use('/' + databasePath, expressPouchDB(PouchDB));

app.get('/', function(req, res){
  res.send(
    '<h1>HFL Signage Player: Back-end 0.3.0</h1>'
    + '<p>'
    + '  <small>'
    + '    Copyright © 2018&ndash;2019 Henrik Franciscus Leppä'
    + '  </small>'
    + '</p>'
    + '<p>'
    + '  <small>'
    + '    This is free software. You may redistribute copies of it under the'
    + '    terms of the'
    + '    <a'
    + '      href="https://opensource.org/licenses/MIT"'
    + '      target="_blank"'
    + '      rel="external noopener noreferrer"'
    + '    ><abbr title="Opens in a new tab/window">↗</abbr>MIT License</a>.'
    + '    There is NO WARRANTY, to the extent permitted by law.'
    + '  </small>'
    + '</p>'
    + '<p>'
    + '  Uploaded files can be found at: '
    + '  <a href="/' + uploadPath + '"><code>/' + uploadPath + '</code></a>'
    + '</p>'
    + '<p>'
    + '  PouchDB can be found at: '
    + '  <a href="/' + databasePath + '"><code>/' + databasePath + '</code></a>'
    + '</p>'
  );
});

var storage = multer.diskStorage({
  destination: './' + uploadPath,
  filename: function(req, file, cb) {
    return cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });

app.post('/' + uploadPath, upload.single('file'), function (req, res, next) {
  console.log(req.file);
  console.log(req.body);
  return res.status(204).end();
});
app.use('/' + uploadPath, express.static(uploadPath));
app.use('/' + uploadPath, serveIndex(__dirname + '/' + uploadPath));

var port = process.env.PORT;

app.listen(port, console.log(
  'hfl-player-back-end is now running.' + '\n\n'
  + 'Copyright © 2018--2019 Henrik Franciscus Leppä' + '\n\n'
  + 'This is free software. You may redistribute copies of it under the terms '
  + 'of the' + '\n'
  + 'MIT License <https://opensource.org/licenses/MIT>. There is NO WARRANTY, '
  + 'to the' + '\n'
  + 'extent permitted by law.' + '\n\n'
  + '  Local:            http://localhost:' + port + '/' + '\n'
));
