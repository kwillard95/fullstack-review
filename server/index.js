const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github.js');
const db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.post('/repos', function (req, res) {
  console.log('user', req.body.username);
  getReposByUsername(req.body.username)
  .then(function (response) {
  console.log(response.data);
     res.send(response.data)
  })
    .catch(function (error) {
      console.log('error', error)
    })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

