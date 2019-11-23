const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/repos', {useNewUrlParser: true}).then(
  () => {console.log('ready!')}
).catch(function(err) {
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
if (data.id !== Repo.where({id: data.id})) {
  doc.save(function (err, data) {
    if (err) return console.log(err);
  })
}
}

let retrieve = () => {
  console.log('here')
  return Repo.find({}).sort({forks_count: -1}).limit(25).exec((err, repos) => {
    if (err) {
      console.log(err);
    }
  })
  // .then((err, data) => {
  //  console.log('data',data)
  // })
}

module.exports.save = save;
module.exports.retrieve = retrieve;