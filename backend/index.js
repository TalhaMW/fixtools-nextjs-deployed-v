const { PDFNet } = require('@pdftron/pdfnet-node');
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');
const pdfToExcelGenerator = require('pdf-to-excel');
const pdf2html = require('pdf2html');
var bodyParser = require('body-parser');
const dotenv = require('dotenv');
const port = process.env.PORT || 4000;

const allRoutes = require('./routes/route');

dotenv.config({ path: './config.env' });

const app = express();
app.use(express.json());

app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', allRoutes);

app.get('/', (req, res) =>
  res.send("Hello World , lets see what's been cooking")
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './files/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const pdfToWordFilter = (req, file, callback) => {
  var ext = path.extname(file.originalname);

  if (ext !== '.pdf') {
    return callback('not supported');
  }
  callback(null, true);
};

// commented code will be add inside

//

const PATH = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('App is running...' + port);
});
