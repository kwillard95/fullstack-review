const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github.js');
const db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.post('/repos', function (req, res) {
  getReposByUsername(req.body.username)
    .then(function (response) {
      var promises = response.data.map((repo) => {
        return db.save(repo);
      })
      Promise.all(promises)
      .then(()=>{
        res.send()
      })
    })
    .catch(function (error) {
      console.log('error', error)
    })
});

app.get('/repos', function (req, res) {
  db.retrieve()
  .then((response) => {
    res.send(response);
  })
});

app.delete('/repos', function (req, res) {
  db.remove()
  .then((response) => {
    res.send();
  })
})

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

