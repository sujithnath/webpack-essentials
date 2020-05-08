const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const staticMiddleware = express.static('dist');

app.use(staticMiddleware);

app.get('/', function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile);
});

// app.get('/kiwi/', function (req, res) {
//   const pathToHtmlFile = path.resolve(__dirname, '../dist/kiwi.html');
//   const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
//   res.send(contentFromHtmlFile);
// });

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(3000, function () {
  console.log('Application is running on http://localhost:3000');
});
