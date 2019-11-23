const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/repos', { useNewUrlParser: true }).then(
  () => { console.log('ready!') }
).catch(function (err) {
  console.log('error')
})


let repoSchema = mongoose.Schema({
  id: Number,
  forks_count: Number,
  url: String,
  description: String,
  full_name: String,
});

let Repo = mongoose.model('Repo', repoSchema);



let save = (data) => {
  var doc = new Repo(data);
  return Repo.findOne({ id: data.id }, function (err, repo) {
    if (err) {
      console.log('error in find one')
    } else if (repo) {
      console.log('already saved')
    } else {
      doc.save(function (err, data) {
        if (err) return console.log(err);
      })
    }
  })
}

let retrieve = () => {
  return Repo.find({}).sort({ forks_count: -1 }).limit(25).exec((err, repos) => {
    if (err) {
      console.log(err);
    } else {
      console.log(repos)
    }
  })
  // .then((err, data) => {
  //  console.log('data',data)
  // })
}

let remove = () => {
  return Repo.deleteMany({}, (err) => {
    if (err) {
      console.log('error deleting')
    }
  })
}

module.exports.save = save;
module.exports.retrieve = retrieve;
module.exports.remove = remove;